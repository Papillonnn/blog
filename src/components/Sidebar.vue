<template>
    <aside class="sidebar">
        <div class="widget-wrap">
            <h3 class="widget-title">
                RECENT
            </h3>
            <div class="widget">
                <ul id="recent-post">
                    <li v-for="recent in recent">
                        <div class="item-img">
                            <a href="#"></a>
                        </div>
                        <div class="item-main">
                            <p class="item-category">{{recent.category}}</p>
                            <p class="item-title">{{recent.title}}</p>
                            <p class="item-date">{{recent.publish_time}}</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
import {getRecentData} from '../api/api.js'
export default {
    data(){
        return {
            recent: []
        }
    },
    async created(){
        this.recent = await getRecentData()
    }
}
</script>
