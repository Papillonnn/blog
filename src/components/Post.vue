<template>
<div>
    <article class="post" v-for="(post, index) in post">
        <h1 @click="detail(index)">{{post.title}}</h1>
        <p>{{post.publish_time}}</p>
        <p>{{post.content}}</p>
    </article>
    <nav aria-label="..." v-show="isShow">
      <ul class="pager">
        <li><a href="javascript:;" @click="prev">Prev</a></li>
        <li><a href="javascript:;" @click="next">Next</a></li>
      </ul>
    </nav>
</div>
</template>

<script>
import axios from 'axios'
import {getPostData} from '../api/api.js'

// axios.defaults.baseURL="http://localhost:3000";
// axios.interceptors.response.use((res)=>res.data);

export default {
    data(){
        return {
            post: [],
            index: 1,
            isShow: true
        }
    },
    async created(){
        this.post = await getPostData()
     },
     methods: {
        prev(){
            if (this.index == 1) {
                return false;
            }
            axios.get('/api/post',{
                  params: {
                     page: --this.index,
                     num: -1
                  }
              }).then(res=>{
                 this.post= res
              }).catch(err=>{})
        },
        next(){
           axios.get('/api/post',{
               params: {
                  page: ++this.index,
                  num: -1
               }
           }).then(res=>{
            if(res.length == 0) {
                this.index--
                return false
            }else { 
              this.post= res
            }
           }).catch(err=>{})
        },
        detail(index) {
            this.$router.push({name: 'detail',params: {page: this.index, num: index}})
        }
     }
}
</script>
