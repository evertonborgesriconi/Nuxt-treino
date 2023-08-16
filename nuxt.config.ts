import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    alias: {
      "@": resolve(__dirname, "/"),
    },
    pages: true,
    css:["~/assets/main.scss"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    // devtools: { enabled: true }
})
