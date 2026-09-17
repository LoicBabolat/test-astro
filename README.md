# Astro + Cloudflare Workers

## Configuration requise

### 1. astro.config.mjs
```javascript
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'standalone'
  })
});
```

### 2. wrangler.jsonc
```json
{
  "name": "astro-test",
  "compatibility_date": "2026-09-17",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@astrojs/cloudflare/entrypoints/server"
}
```

### 3. pnpm-workspace.yaml
```yaml
allowBuilds:
  workerd: true
```

### 4. package.json
```json
{
  "devDependencies": {
    "wrangler": "^4.134.0",
    "@astrojs/cloudflare": "^14.3.2"
  }
}
```

## Déploiement
Le déploiement se fait automatiquement via Cloudflare lors d'un push sur la branche principale.

## Documentation
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare Astro Guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Wrangler Configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)

