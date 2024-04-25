import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "期刊",
    icon: "mdi:journal-multiple",
    prefix: "/posts/",
    children: [
      "",
      "2023-08/",
      "2023-09/",
      "2023-10/",
      "2023-12/",
      "2024-02/",
      "2024-03/",
    ],
  },
  {
    text: "关于我们",
    icon: "mdi:create-outline",
    prefix: "/",
    children: [
      "bulletin/",
      "description",
      "call",
      "intro",
      "statement",
    ]
  },
  {
    text: "PDF下载",
    icon: "ic:round-download",
    link: "https://aneotpan.wuyilingwei.com"
  },
  {
    text: "泰讯枢纽",
    icon: "mdi:link-variant",
    link: "https://terrach.net/"
  }
]);
