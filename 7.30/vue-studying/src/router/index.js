import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/Child1",
      component: () => import("@/components/Child1.vue"),
    },
    {
      path: "/Child2",
      component: () => import("@/components/Child2.vue"),
    },
    {
      path: "/ComponentA",
      component: () => import("@/components/ComponentA.vue"),
    },
    {
      path: "/ComponentB",
      component: () => import("@/components/ComponentB.vue"),
    },
    {
      path: "/ComponentEvent",
      component: () => import("@/components/ComponentEvent.vue"),
    },
    {
      path: "/Main",
      component: () => import("@/components/Main.vue"),
    },
    {
      path: "/MyComponent",
      component: () => import("@/components/MyComponent.vue"),
    },
    {
      path: "/Parent",
      component: () => import("@/components/Parent.vue"),
    },
    {
      path: "/SearchComponent",
      component: () => import("@/components/SearchComponent.vue"),
    },
    {
      path: "/Article",
      component: () => import("@/pages/Article.vue"),
    },
    {
      path: "/Aside",
      component: () => import("@/pages/Aside.vue"),
    },
    {
      path: "/Header",
      component: () => import("@/pages/Header.vue"),
    },
    {
      path: "/Item",
      component: () => import("@/pages/Item.vue"),
    },
    {
      path: "/Main2",
      component: () => import("@/pages/Main2.vue"),
    },
    {
      path: "/Component1",
      component: () => import("@/components/Component1.vue"),
    },
    {
      path: "/Component2",
      component: () => import("@/components/Component2.vue"),
    },
    {
      path: "/SlotsBase",
      component: () => import("@/components/SlotsBase.vue"),
    },
    {
      path: "/SlotsBaseParent",
      component: () => import("@/components/SlotsBaseParent.vue"),
    },
    {
      path: "/LifeDemo",
      component: () => import("@/components/LifeDemo.vue"),
    },
    {
      path: "/UserParentComponent",
      component: () => import("@/components/UserParentComponent.vue"),
    },
  ],
});

export default router;
