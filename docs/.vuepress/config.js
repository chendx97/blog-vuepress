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
        title: "nginx",
        path: "/nginx/autoindex_auth",
        collapsable: false,
        children: [
          { title: "目录浏览&权限校验", path: "/nginx/autoindex_auth" },
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