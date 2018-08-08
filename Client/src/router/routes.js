import Home from '../components/pages/Home.vue'
import Trending from '../components/pages/Trending.vue'
import Search from '../components/pages/Search.vue'

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
  }
]
