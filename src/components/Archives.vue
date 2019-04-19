<template>
    <div class="archives">
        <div class="time-line">
            <div class="time-line-row time-line-row-major">
                <span class="node">
                    <i class="glyphicon glyphicon-calendar"></i>
                </span>
                <h3 class="title">2019</h3>
            </div>
            <div class="time-line-row" v-for="(item, index) in archives" @click="showBlog(index)">
                <span class="node"></span>
                <div class="time-line-content">
                    <span class="time-line-name">
                        {{item.title}}
                    </span>
                </div>
            </div>
        </div>
        <nav aria-label="...">
            <ul class="pager">
                <li><a href="javascript:;" @click="prev">Prev</a></li>
                <li><a href="javascript:;" @click="next">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
import {getArchivesData} from '../api/api.js'

export default {
    data(){
        return {
            archives: [],
            index: 1
        }
    },
    async created(){
        this.archives = await getArchivesData()
     },
     methods: {
        showBlog(index){
            this.$router.push({name: 'detail',params: {page: this.index, num: index}})
        },
        prev(){
            if(this.index == 1){
                return false
            }else {
               axios.get('/api/archives',{
                  params: {
                     page: --this.index
                  }
              }).then(res=>{
                 this.archives= res
              }).catch(err=>{})
            }
        },
        next(){
            axios.get('/api/archives',{
               params: {
                  page: ++this.index
               }
           }).then(res=>{
            if(res.length == 0) {
                this.index--
                return false
            }else { 
              this.archives= res
            }
           }).catch(err=>{})
        }
     }
} 
</script>