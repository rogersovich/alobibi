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
        path: '',
        name: 'Home',
        component: () => import("@/views/Home/Home.vue"),
      }
    ]
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   meta: {
  //     typePage: "pages",
  //   },
  //   component: () => import("@/views/Auth/Login.vue"),
  // },
  // {
  //   path: "/cari-proyek",
  //   component: () => import("@/views/Project/Index.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "SearchProyek",
  //       component: () => import("@/views/Project/Project.vue"),
  //       meta: {
  //         key: "search-project",
  //       },
  //     },
  //     {
  //       path: ":slug/:id",
  //       name: "ProjectDetail",
  //       component: () => import("@/views/Project/Detail.vue"),
  //       meta: {
  //         key: "search-project",
  //       },
  //     },
  //   ],
  // },
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
