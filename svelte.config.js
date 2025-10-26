import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Configures mdsvex to handle .md files
  extensions: [".svelte", ".md"],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "./src/lib/components/BlogLayout.svelte",
      },
    }),
  ],

  kit: {
    adapter: adapter({
      // GitHub Pages krever at alt er i docs mappen ELLER at du bruker gh-pages branch
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      // Hvis repo heter herremann.edu.eu.org og du bruker username.github.io/herremann.edu.eu.org
      // må du sette base: '/herremann.edu.eu.org'
      // Men siden du bruker custom domain (herremann.edu.eu.org) kan du la dette være ''
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH || "",
    },
  },
};

export default config;
