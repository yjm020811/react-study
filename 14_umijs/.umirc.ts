// 对webpack进行配置，可以参考umijs官网
import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    dark: false, // 开启暗黑模式
    compact: false, // 是否开启紧凑模式
    import: false, // 不引入antd样式，按需加载
    configProvider: {}, // 配置全局的configProvider
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  //source-map(与源码进行映射，方便调试): 开发环境使用eval，生产环境不使用
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  // 哈希:打包后文件名会带有哈希值，防止缓存
  hash: true,
  // 配置图片打包方式，大于10kb，就单独大包为图片，小于10kb，打包为base64
  inlineLimit: 10000,
  // 配置js的压缩方式，'none'表示不压缩
  jsMinifier: 'none',
  // 配置打包后的资源导入路径 默认是/
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/umi/',
  // 配置网站标题
  title: 'umijs-yjm',
  // 配置浏览器兼容性
  polyfill: {
    imports: ['core-js/features/promise/try'],
  },
  // 配置路由
  history: {
    type: 'hash', // hash路由
  },
  // 配置代理(解决跨域)
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  // https://umijs.org/docs/guides/routes#%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home/:name/:age', // 动态路由
      component: '@/pages/Home', // 会自动去pages目录下寻找对应的组件（推荐使用@组织路径文件位置）
      menuHeaderRender: false, //不展示菜单顶栏
    },
    {
      name: '权限演示',
      path: '/access',
      component: '@/pages/Access',
      //routes：配置子路由，这里配置了，需要子路由的父级通过 <Outlet/> 来渲染子路由
      routes: [
        {
          name: '有权限',
          path: 'hasPer',
          component: './Access/components/hasPer', // 相对路径调整
        },
        {
          name: '无权限',
          path: 'noPer',
          component: './Access/components/noPer', // 相对路径调整
        },
      ],
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: '@/pages/Table',
    },
    // umijs的404页面，当路由匹配不到时，会自动跳转到这个页面
    {
      name: '404',
      path: '/*',
      component: './NotFound',
    },
  ],
  npmClient: 'pnpm',
  // 使用antd，需要配置antd的按需加载
  externals: {},
});
