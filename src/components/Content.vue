<template>
  <div class="content">
        <div class="content-main">
            <Profile></Profile>
            <section id="main">
                <router-view></router-view>
            </section>
            <Sidebar></Sidebar>
        </div>
    </div>
</template>

<script>
import Profile from './Profile.vue'
import Sidebar from './Sidebar.vue'
export default {
    components: {
        Profile,
        Sidebar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/index.css';
@import '../assets/styles/archives.css';
@import '../assets/styles/category.css';
@import '../assets/styles/tags.css';
@import '../assets/styles/about.css';
</style>
