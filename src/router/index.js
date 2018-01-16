import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Splash from '@/pages/Splash'
import Admin from '@/pages/admin/Index'
import User from '@/pages/user/User'
import Todo from '@/pages/admin/Todo'
import Super from '@/pages/super/Super'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Forgot from '@/pages/Forgot'

// Components

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
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
      name: 'Index',
      component: Admin,
      children: [
        {
          path: 'todo',
          name: 'Todo',
          component: Todo
        }
      ]

    },
    {
      path: '/super',
      name: 'Super',
      component: Super
    }
  ]
})
