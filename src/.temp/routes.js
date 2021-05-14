const c1 = () => import(/* webpackChunkName: "page--src-pages-other-page-vue" */ "D:\\Git\\Tests - Copy\\src\\pages\\OtherPage.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\Git\\Tests - Copy\\src\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Git\\Tests - Copy\\src\\pages\\Index.vue")

export default [
  {
    path: "/other-page/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
