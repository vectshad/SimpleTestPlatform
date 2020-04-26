import Vue from 'vue'
import Router from 'vue-router'
import Platform from '../page/Platform.vue'
import Evaluate from '../page/Evaluate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/evaluate',
      name: 'Evaluate',
      component: Evaluate
    }
  ]
})