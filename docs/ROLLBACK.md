# Rollback procedure

## Cloudflare Workers (instantané, ~10s)

```bash
bunx wrangler rollback                    # rollback to previous version (interactive)
bunx wrangler deployments list             # voir versions disponibles
bunx wrangler rollback <deployment-id>     # rollback ciblé
```

## Git revert + redeploy (~2 min)

```bash
git log --oneline -10                      # identifier le bad commit
git revert <bad-commit>                    # créer un commit de revert
git push origin main                       # auto-deploy staging
# Trigger manuel GitHub Actions deploy-prod
```

## Tests post-rollback à exécuter

1. `bun run build` localement
2. `bun run test:run` localement
3. Lighthouse home production (Perf > 90)
4. Click parcours : Home → Services → Contact → Form submit
5. Switch FR/EN fonctionne

## Sprint 0 decisions (2026-05-25)

- **H11 D1 database : RETIRÉ** pour Sprint 0. Re-créer si besoin Sprint 6 via `bunx wrangler d1 create jonas-diop-leads` + décommenter bloc `d1_databases` dans wrangler.jsonc.
- **Premier deploy Cloudflare + repo GitHub : DIFFÉRÉ** (à faire par Rochdi quand setup CF prêt). Stack code est prête, secrets à add dans GitHub Settings → Secrets : `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`.
