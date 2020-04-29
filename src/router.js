import Vue from 'vue';
import Router from 'vue-router';
import Rules from '@/views/Rules.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "",
      name: 'rules',
      component: Rules
    }
  ]
});

export default router;
