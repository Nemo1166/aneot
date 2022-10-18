import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "期刊",
    icon: "repo",
    prefix: "/posts/",
    children: [
      "",
      "2022-05/",
      "2022-06/",
      "2022-07/",
      "2022-08/",
      "2022-09/",
      "2022-10/",
    ],
  },
  {
    text: "关于我们",
    icon: "creative",
    prefix: "/",
    children: [
      "description",
      "call",
      "intro"
    ]
  },
  {
    text: "泰讯枢纽",
    icon: "link",
    link: "https://terrach.net/"
  }
]);
