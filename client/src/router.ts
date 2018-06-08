import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Stuff from './views/Stuff.vue'
import MoreStuff from './views/MoreStuff.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/stuff',
          name: 'stuff',
          component: Stuff
        },
        {
          path: '/more_stuff',
          name: 'more_stuff',
          component: MoreStuff
        }
      ]
    }
  ]
})
