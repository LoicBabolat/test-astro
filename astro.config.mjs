import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://example.com",
  output: 'server',
  integrations: [preact()],
  adapter: cloudflare({
    mode: 'standalone'
  })
});
