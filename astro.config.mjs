import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url
    ? config.site.base_url
    : "https://exprosoftech-wine.vercel.app/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
    sanity({
      projectId: "wc6w49nw",
      dataset: "production",
      useCdn: false,
    }),
  ],

  markdown: {
    remarkPlugins: [
      remarkModifiedTime,
      rehypeHeadingIds,
      [remarkToc, { heading: "contents" }],
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },

  output: "server",
  adapter: vercel({
    functionPerRoute: false,
    edgeMiddleware: false,
    webAnalytics: {
      enabled: false,
    },
  }),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            "astro-vendor": ["astro"],
            utils: ["dayjs", "github-slugger", "marked"],
          },
        },
      },
    },
    server: {
      fs: {
        strict: false,
      },
    },
    ssr: {
      noExternal: ["marked", "gsap"],
    },
    optimizeDeps: {
      include: ["gsap", "gsap/ScrollTrigger"],
    },
  },
});
