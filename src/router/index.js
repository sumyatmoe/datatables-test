//import packages
import * as vueRouter from "vue-router";
import axios from "axios";

//import views
import Student from "../views/HelloWorld.vue";


//route setting
const routes = [
  {
    path: "/prj/new/",
    name: "Student",
    component: Student,
    //meta: { requiresAuth: true }
  },
];

//create router
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;
