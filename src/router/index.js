import Vue from 'vue'
import Router from 'vue-router'
import Platform from '../page/Platform.vue'
import Review from '../page/Review.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    }
  ]
})