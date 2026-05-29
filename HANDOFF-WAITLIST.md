# Waitlist API — handoff Sprint 3.5

> Endpoint pré-lancement pour la Trilogie bootcamps (An Army of One™ /
> The Edge™ / The Activation™). Stocke les emails dans Cloudflare KV en
> attendant que Jonas fournisse l'endpoint GHL (H8 — Sprint 6B).

## 1. Setup KV namespaces (à faire UNE fois sur le compte CF de Jonas)

```bash
# Production (compte CF Jonas)
bun wrangler kv namespace create WAITLIST
bun wrangler kv namespace create WAITLIST --preview

# Staging (compte CF intralysqc — Rochdi)
bun wrangler kv namespace create WAITLIST_STAGING
```

Coller les IDs renvoyés dans `wrangler.jsonc` :

- `kv_namespaces[1].id` + `preview_id` → IDs prod
- `env.staging.kv_namespaces[1].id` → ID staging

Tant que les IDs valent `REPLACE_AFTER_CREATE*`, l'endpoint renvoie
`503 service_unavailable` (handler safe — pas de crash).

## 2. Contrat API

### Request

```http
POST /api/waitlist
Content-Type: application/json

{
  "email": "user@example.com",
  "route": "/evenements/bootcamps/an-army-of-one",
  "source": "hero",
  "locale": "fr",
  "consent": true,
  "website": ""
}
```

**Champs** :

| Champ | Type | Requis | Notes |
|---|---|---|---|
| `email` | string | oui | Validé regex RFC-5322-lite, max 254 chars, lowercased+trim avant write |
| `route` | string | oui | Pathname courant. Si `source` ∈ {hero, final, edge-app, evenements-hub} → DOIT être un des 8 bootcamp routes (FR + EN). Sinon (footer/popup) : n'importe quel pathname valide |
| `source` | enum | oui | `'hero' \| 'final' \| 'popup' \| 'footer' \| 'edge-app' \| 'evenements-hub'` |
| `locale` | enum | non | `'fr' \| 'en'` — default `'fr'` |
| `consent` | bool | oui | **DOIT** valoir `true` (Loi 25 QC — consentement explicite) |
| `website` | string | non | **Honeypot**. Caché en CSS dans le form. Si non-vide → silent 200 (anti-bot) |

### Response

- `200 { ok: true }` — accepté (ou honeypot piégé silencieusement)
- `400 { ok: false, error: 'invalid_email' \| 'invalid_route' \| 'invalid_source' \| 'consent_required' \| 'invalid_json' \| 'invalid_payload' }` — validation fail
- `405 { ok: false, error: 'method_not_allowed' }` — autre méthode que POST
- `429 { ok: false, error: 'rate_limited' }` — > 5 soumissions / email / 24h
- `503 { ok: false, error: 'service_unavailable' }` — KV binding manquant (config error)

### CORS

Origins autorisés :
- `https://jonas-diop.intralys.dev`
- `https://jonas-diop.intralysqc.workers.dev`
- `https://jonasdiop.com` + `www.`
- `http://localhost:5173` + `:4173` + `127.0.0.1` variants

Préflight OPTIONS → 204.

## 3. Stockage KV

**Key** : email lowercased + trim (déduplication granularité = email).

**Value** (JSON stringified) :

```ts
{
  email: string,
  route: string,           // dernière route
  source: WaitlistSource,  // dernière source
  ts: string,              // ISO — PREMIÈRE soumission (jamais écrasé)
  locale: 'fr' | 'en',
  consent: true,
  count: number,           // total submissions
  history: Array<{ route, source, ts }>, // cap 20 dernières
  lastTs: string,          // ISO — dernière soumission (sliding window rate-limit)
  ghlSynced: boolean       // sera flippé true par H8 batch sync (Sprint 6B)
}
```

**Pas de TTL** — la waitlist pré-lancement est de la durée de vie permanente.

## 4. Sécurité

1. **Honeypot `website`** → silent 200 (jamais 400, sinon les bots tunent leur form).
2. **Email regex** → conservative RFC-5322-lite.
3. **Route + source allowlist** → anti-CSRF + anti-cannibalisation (waitlist
   est réservée au funnel bootcamps + Footer/Popup sitewide).
4. **Rate limit 5/email/24h** → sliding window via `lastTs` (PAS per-IP — il
   faudrait Workers Rate Limiting API binding, hors scope pré-launch).
5. **Loi 25 QC** : `consent: true` requis sinon 400. Stocké en KV pour audit.

## 5. Export → GHL (Sprint 6B / H8)

Quand Jonas fournit l'endpoint GHL :

```bash
# Lister toutes les keys
bun wrangler kv key list --binding WAITLIST

# Exporter une entry
bun wrangler kv key get --binding WAITLIST <email>

# Bulk export
bun wrangler kv bulk get --binding WAITLIST keys.json > export.json
```

Puis script de migration `scripts/waitlist-to-ghl.ts` qui POST vers
`/external-tracking/events` (cf. `intralys-v6-pipeline` skill pattern) avec
`ghlSynced: true` write-back en KV pour idempotence.

## 6. Fichiers

- `src/worker.ts` — entry router (modifié)
- `src/worker/api-waitlist.ts` — handler (nouveau)
- `src/worker/types.ts` — Env + payload types (nouveau)
- `wrangler.jsonc` — binding WAITLIST ajouté (prod + staging)

## 7. Tests à ajouter (Sprint 4 — Vitest)

- `tests/worker/api-waitlist.test.ts`
- Couvrir : honeypot silent 200, email invalide, source/route invalides,
  consent manquant, rate limit après 5 hits, KV binding absent → 503,
  CORS preflight 204, méthode GET → 405.
- Mock KV via `miniflare` ou stub `KVNamespace` minimal.
