// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RayChen's Coding Blog",
  tagline: "",
  url: "https://ray-chen-docusaurus-vercel.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RayChen1996", // Usually your GitHub org/user name.
  projectName: "RayChen-Docusaurus-Vercel", // Usually your repo name.
  deploymentBranch: "gh-pages",

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  // defaultLocale: "en",
  // locales: ["zh-Hant"],
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Ray.Dev 1996",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-no-background.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Note",
          },
          { to: "/about", label: "About", position: "left" },
          {
            href: "https://github.com/RayChen1996",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      // announcementBar: {
      //   id: "support_us",
      //   content: "",
      //   textColor: "#091E42",
      //   isCloseable: false,
      // },

      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     // {
          //     //   label: "Blog",
          //     //   to: "/blog",
          //     // },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/RayChen1996",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
