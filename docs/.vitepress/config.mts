// noinspection TypeScriptValidateTypes

import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { withPwa } from "@vite-pwa/vitepress";
import { text } from "mermaid/dist/rendering-util/rendering-elements/shapes/text";

const customElements: string[] = [""];

// https://vitepress.dev/reference/site-config
export default withPwa(
  withMermaid(
    defineConfig({
      title: "STM32GuideBook",
      titleTemplate: "STM32GuideBook",
      description: "DTS's Adventure Guider",
      lang: "zh-CN",
      base: "/",
      cleanUrls: true,
      metaChunk: true,
      lastUpdated: false,
      themeConfig: {
        nav: [
          {
            text: "Home",
            link: "/",
          },
          {
            text: "关于",
            link: "/About",
          },
        ],

        sidebar: {
          "/教程/正文/": [
            {
              text: "嵌入式IDE的安装与配置",
              collapsed: false,
              items: [
                {
                  text: "STM32CubeIDE",
                  link: "/教程/正文/IDE/STM32CubeIDE.md",
                },
                {
                  text: "VSCode+STM32CubeMX",
                  link: "/教程/正文/IDE/VSCode.md",
                },
                {
                  text: "CLion+STM32CubeMX",
                  link: "/教程/正文/IDE/CLion.md",
                },
              ],
            },
          ],
        },
        outline: {
          level: [2, 4],
          label: "页面导航",
        },

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/SUT-DTS/SUT-DTS.github.io",
          },
        ],
        editLink: {
          pattern:
            "https://github.com/SUT-DTS/SUT-DTS.github.io/edit/main/docs/:path",
          text: "编辑此页",
        },
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换至浅色",
        darkModeSwitchTitle: "切换至深色",

        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        externalLinkIcon: true,
      },
      markdown: {
        lineNumbers: false,
        codeCopyButtonTitle: "复制代码",
        math: true,
        image: {
          lazyLoading: true,
        },
        container: {
          tipLabel: "看这里！",
          warningLabel: "注意注意！",
          dangerLabel: "!!!WARNING!!!",
          infoLabel: "INFORMATION",
          detailsLabel: "点击展开！",
        },
      },
      vue: {
        customElement: customElements,
      },
      pwa: {
        strategies: "generateSW",
        registerType: "autoUpdate",
        injectRegister: "script-defer",
        pwaAssets: {},
        workbox: {
          globPatterns: ["**/*.{css,js,html,woff2}"],
          maximumFileSizeToCacheInBytes: 10485760,
        },
        experimental: {
          includeAllowlist: true,
        },
      },
    }),
  ),
);
