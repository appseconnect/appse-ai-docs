import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "appse ai - docs",
  tagline: "Your AI automation journey starts here!",
  favicon: "img/favicon-appse-ai-docs.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.insync.pro",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "APPSeConnect", // Usually your GitHub org/user name.
  projectName: "arise-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/", // Set the base path for docs
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: ["./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["docusaurus-theme-search-typesense"],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/social-card.jpg",
    typesense: {
      typesenseCollectionName: "docs",
      typesenseServerConfig: {
        nodes: [
          {
            host: "localhost",
            port: 8108,
            protocol: "http",
          },
        ],
        apiKey: "xyz123secureapikey",
      },
      typesenseSearchParameters: {
        query_by:
          "hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,embedding",
        vector_query:
          "embedding:([], k: 5, distance_threshold: 1.0, alpha: 0.2)", // Optional vector search fine-tuning
      },
      searchPagePath: false,
      contextualSearch: true,
    },
    // algolia: {
    //   appId: "YOUR_APP_ID",
    //   apiKey: "YOUR_SEARCH_API_KEY",
    //   indexName: "YOUR_INDEX_NAME",
    //   contextualSearch: true,
    // },

    navbar: {
      title: "appse ai docs",
      logo: {
        alt: "appse ai docs",
        src: "img/brand-logo-appse-ai.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "platformSidebar",
          position: "left",
          label: "Platform",
        },
        {
          type: "docSidebar",
          sidebarId: "app_integrationSidebar",
          position: "left",
          label: "App Integrations",
        },
        {
          type: "search",
          position: "right",
        },

        // { to: "/app-integration", label: "App Integrations", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Tutorial",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "X",
      //         href: "https://x.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} APPSeAI. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    // [
    //   "@docusaurus/plugin-sitemap",
    //   {
    //     changefreq: "weekly",
    //     priority: 0.5,
    //   },
    // ],
    [
      "docusaurus2-dotenv",
      {
        path: "./.env",
        safe: false,
        systemvars: false,
        silent: false,
        expand: false,
        defaults: false,
      },
    ],
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     indexDocs: true,
    //     indexDocSidebarParentCategories: 0,
    //     indexBlog: false,
    //     indexPages: true,
    //     language: "en",
    //     maxSearchResults: 8,
    //   },
    // ],
  ],
};

export default config;
