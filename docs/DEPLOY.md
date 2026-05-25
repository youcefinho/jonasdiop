# Deploy procedure

## Pré-requis (une seule fois après création repo GitHub)

1. Repo créé : `intralys/jonas-diop`
2. Secrets GitHub Actions ajoutés :
   - `CLOUDFLARE_API_TOKEN` (Cloudflare Dashboard → My Profile → API Tokens → Create Token "Edit Cloudflare Workers")
   - `CLOUDFLARE_ACCOUNT_ID` (Cloudflare Dashboard → bottom right corner)
3. Premier deploy local manual pour créer worker :
   ```bash
   bun run build
   bunx wrangler deploy --env staging      # crée jonas-diop-staging
   bunx wrangler deploy                    # crée jonas-diop production
   ```
4. KV namespace création :
   ```bash
   bunx wrangler kv namespace create ARTICLE_CACHE
   # copier l'ID retourné dans wrangler.jsonc
   ```
5. (Optionnel H11) D1 create :
   ```bash
   bunx wrangler d1 create jonas-diop-leads
   # décommenter le bloc d1_databases dans wrangler.jsonc
   ```

## Deploy staging (auto)

Push sur `main` → CI passe → auto-deploy staging.

## Deploy production (manuel via GH Actions)

1. GitHub → Actions → "Deploy Production" → Run workflow
2. Vérifier live `https://jonas-diop.intralys.dev/`
3. Test parcours conversion
