import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import watermarkPlugin from './watermark-plugin'

export default defineUserConfig({
  lang: "zh-CN",
  title: "回归线",
  description: "Another End of Terra",
  base: "/",
  shouldPrefetch: false,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/lxgw-wenkai-screen-webfont@1.6.0/style.css",
      }
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5a7388e8b9935ce907b84d7147b3a31d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    [
      "script",
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3488523212284726",
        crossorigin: "anonymous",
        async: "async"
      },
      ''
    ],
  ],

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/": { placeholder: "搜索..." }
      },
      hotKeys: [''],
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),
    watermarkPlugin,
  ],
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    '@theme-hope/modules/blog/components/BlogHero': path.resolve(
      __dirname,
      './components/MyBlogHero.vue'
    ),
  },
});
