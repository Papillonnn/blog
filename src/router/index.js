import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Post from '../components/Post.vue'
import Archives from '../components/Archives.vue'
import Categories from '../components/Categories.vue'
import Tags from '../components/Tags.vue'
import About from '../components/About.vue'
import Detail from '../components/Detail.vue'
import Write from '../components/Write.vue'

export default new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home', 
        name: 'home',
        component:Post
      },
      {
        path: '/archives', 
        name: 'archives',
        component:Archives
      },
      {
        path: '/categories', 
        name: 'categories',
        component:Categories
      },
      {
        path: '/tags', 
        name: 'tags',
        component:Tags
      },
      {
        path: '/about', 
        name: 'about',
        component:About
      },
      {
        path: '/detail',
        name: 'detail',
        component:Detail
      },
      {
        path: '/write',
        name: 'write',
        component:Write
      }
    ]
})
