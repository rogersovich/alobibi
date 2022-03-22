/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
// import store from "../store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
        meta: {
          key: "home",
          type: "page",
        },
      },
    ],
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   meta: {
  //     typePage: "pages",
  //   },
  //   component: () => import("@/views/Auth/Login.vue"),
  // },
  {
    path: "/layanan",
    component: () => import("@/views/Service/Index.vue"),
    children: [
      {
        path: "",
        redirect: { name: "Home" },
        meta: {
          key: "service",
          type: "detail",
        },
      },
      {
        path: "harian",
        component: () => import("@/views/Service/Harian/Index.vue"),
        meta: {
          key: "service",
          type: "detail",
        },
        children: [
          {
            path: ":service",
            name: "Service",
            component: () => import("@/views/Service/Harian/Service.vue"),
            meta: {
              key: "service",
              type: "detail",
            },
          },
        ],
      },
      {
        path: "bulanan",
        component: () => import("@/views/Service/Bulanan/Index.vue"),
        meta: {
          key: "service",
          type: "detail",
        },
        children: [
          {
            path: "rekrut-bibi-bulanan",
            name: "RekrutBulanan",
            component: () => import("@/views/Service/Bulanan/RekrutBulanan.vue"),
            meta: {
              key: "service",
              type: "detail",
            },
          },
        ],
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

// router.beforeEach((to, from, next) => {
//   const { token } = store.state.auth;

//   if (to.meta.typePage !== "pages" && token === "") {
//     next({ name: "Login" });
//   } else if (to.meta.typePage === "pages" && token !== "") {
//     next({ name: "DashboardHome" });
//   } else {
//     next();
//   }

//   next();
// });

export default router;
