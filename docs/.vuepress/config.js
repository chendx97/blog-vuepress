module.exports = {
  title: '河豚',
  description: 'XXX',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "github", link: "https://github.com/chendx97" },
    ],
    sidebar: [
      {
        title: "html",
        path: "/html/零宽字符",
        collapsable: false,
        children: [
          { title: "一个看起来只有2个字长度却有8的字符串引起的bug", path: "/html/零宽字符" },
          { title: "canvas之measureText测量文本", path: "/html/canvas-measureText" },
        ],
      },
      {
        title: "css",
        path: "/css/tailwind-guide",
        collapsable: false,
        children: [
          { title: "tailwind使用指南", path: "/css/tailwind-guide" },
          { title: "【翻译】如何实现一个纯CSS计时器", path: "/css/timer" },
          { title: "给svg设置cursor不生效", path: "/css/svg-cursor" },
          { title: "常见的hover菜单缝隙问题", path: "/css/menu" },
        ],
      },
      {
        title: "node",
        path: "/node/post-502",
        collapsable: false,
        children: [
          { title: "为什么只这一个接口502呢？", path: "/node/post-502" },
          { title: "第一次开发node接口-干货总结", path: "/node/开发接口" },
        ],
      },
      {
        title: "nginx",
        path: "/nginx/autoindex_auth",
        collapsable: false,
        children: [
          { title: "目录浏览&权限校验", path: "/nginx/autoindex_auth" },
        ],
      },
      {
        title: "自定义开发工具",
        path: "/custom-utils/frame",
        collapsable: false,
        children: [
          { title: "实现自定义脚手架", path: "/custom-utils/frame" },
        ],
      },
      {
        title: "git",
        path: "/git/lfs",
        collapsable: false,
        children: [
          { title: "git LFS解决大文件上传", path: "/git/lfs" },
        ],
      },
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ]
      }
    ],
    // sidebarDepth: 0,
  },
  base: '/blog/',
}