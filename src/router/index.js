import Vue from 'vue'
import Router from 'vue-router'

// Pages
import HelloWorld from '@/components/HelloWorld'
import Splash from '@/pages/Splash'
import Admin from '@/pages/Admin'
import User from '@/pages/User'
import Todo from '@/pages/Todo'
import Super from '@/pages/Super'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Forgot from '@/pages/Forgot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/splash',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/super',
      name: 'Super',
      component: Super
    }
  ]
})
