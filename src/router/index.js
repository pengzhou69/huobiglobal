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
  },
      {
        path: "/zcdl",
        name: "Zcdl",
        component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Zcdl.vue")
  },
  {
    path: "/content-user",
    name: "Content-user",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/content-user.vue")
  },
    {
    path: "/quotation",
    name: "Quotation",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Quotation.vue")
  },
    {
    path: "/cointrading",
    name: "Cointrading",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Cointrading.vue")
  },
    
    {
    path: "/contracttransaction",
    name: "Contracttransaction",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Contracttransaction.vue")
  },
    {
    path: "/fbtransaction",
    name: "Fbtransaction",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Fbtransaction.vue")
  },
    {
    path: "/liquidation",
    name: "Liquidation",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Liquidation.vue")
  },
      {
    path: "/datation",
    name: "Datation",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Datation.vue")
  },
        {
    path: "/fund-data",
    name: "Fund-data",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Fund-data")
  },
            {
    path: "/settlement",
    name: "Settlement",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Settlement")
  },
                      {
    path: "/cross-margin",
    name: "Cross-margin",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Cross-margin")
  },
                        {
    path: "/transac",
    name: "Transac",
    component: () => 
          import(/* webpackChunkName: "about" */ "../views/pages/Transac.vue")
  },
  
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
