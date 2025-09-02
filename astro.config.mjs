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
    : "https://exprosoftech.com/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  compressHTML: true,
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
    edgeMiddleware: true,
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      sizes: [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ["cdn.sanity.io"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "/images/**",
        },
      ],
      minimumCacheTTL: 31536000,
      formats: ["image/avif", "image/webp"],
      qualities: [50, 75, 90],
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
            "ui-components": [
              "@heroicons/react",
              "@phosphor-icons/react",
              "@tabler/icons-react",
            ],
            animation: ["gsap", "framer-motion", "aos"],
          },
        },
      },
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsInlineLimit: 4096,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Enable source maps for development
          sourceMap: true,
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
