import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/content',
    component: Home,
    children: [
          {
            path: "/content",
            name: "Content",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/pages/Content.vue")
      },
      {
        path: "/college",
        name: "College",
        component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/College.vue")
      }     
    ]
  },
   {
        path: "/pzhcs",
        name: "Pzhcs",
        component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Pzhcs.vue")
      }
  
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
