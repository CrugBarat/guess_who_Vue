import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Rules from '@/views/Rules.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "",
      name: 'home',
      component: Home
    },
    {
      path: "/rules",
      name: 'rules',
      component: Rules
    }
  ]
});

export default router;
