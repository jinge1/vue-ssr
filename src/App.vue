<template>
<div id="app" class="vue-app">
  <h1>vue服务端渲染demo</h1>
  <h2>router的实现</h2>
  <ul class="nav">
    <li>
      <router-link class="link" to="/home">to Home</router-link>
    </li>
    <li>
      <router-link class="link" to="/other">to Other</router-link>
    </li>
  </ul>
  <router-view class="view"></router-view>
  <!-- # 参考案例
  * https://www.jianshu.com/p/c6a07755b08d
  * https://ssr.vuejs.org/zh/guide/hydration.html -->
</div>
</template>

<style>
.vue-app{
  padding:20px;
  line-height:2.5em;
}
</style>
