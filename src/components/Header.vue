<template>
  <div class="header">
    <div class="header-main">
      <a href="#" id="logo">
        <i class="logo"></i>
        <span class="site-title">
          xxx's blog
        </span>
      </a>
      <div class="main-nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/archives">Archives</router-link>
          </li>
          <li>
            <router-link to="/categories">Categories</router-link>
          </li>
          <li>
            <router-link to="/tags">Tags</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <form action="">
          <input type="text" class="search-input" value="Search">
          <button type="submit">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/index.css';
</style>
