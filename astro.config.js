export default {
  buildOptions: {
    site: "http://dawnofmidnight.tech",
    sitemap: true,
  },
  devOptions: {
    port: 3000,
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ]
};
