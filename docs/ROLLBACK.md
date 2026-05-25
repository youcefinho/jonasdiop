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
