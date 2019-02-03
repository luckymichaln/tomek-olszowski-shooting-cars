import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Projects from '@/components/pages/Projects'
import Gallery from '@/components/pages/Gallery'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/:id/:slug',
      name: 'gallery',
      component: Gallery
    }
  ]
})

router.beforeEach(function (to, from, next) {
  next()
})

export default router
