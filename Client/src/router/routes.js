import Home from '../components/pages/Home.vue'
import Trending from '../components/pages/Trending.vue'
import Search from '../components/pages/Search.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'
import Profile from '../components/pages/Profile.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/trending',
    component: Trending
  },
  {
    path : '/search/:term',
    component : Search
  },
  {
    path : '/login',
    component : Login
  },
  {
    path : '/register',
    component : Register
  },
  {
    path: '/profile/:username',
    component: Profile
  }

]
