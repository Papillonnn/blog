<template>
    <aside class="profile">
        <div class="base-info">
            <img src="../assets/timg.jpg">
            <h2 id="name">{{profile.name}}</h2>
            <h3 id="job">{{profile.job}}</h3>
            <span class="location">
                <span class="glyphicon glyphicon-map-marker"></span>
                    {{profile.location}}
            </span>
            <a href="#" id="follow" @click="write">
                WRITE
            </a>
        </div>
        <div class="article-info">
            <div class="article-post">
                {{profile.post}}
                <span>POSTS</span>
            </div>
            <div class="tags">
                {{profile.tags}}
                <span>TAGS</span>
            </div>
        </div>
    </aside>
</template>

<script>
import {getProfileData} from '../api/api.js'

export default {
    data(){
        return {
            profile: {}
        }    
    },
    async created(){
        this.profile = await getProfileData()
        
    },
    methods: {
        write(){
            this.$router.push({name: 'write'})
        }
    }
}
</script>
