<template>
<div>
  <section>position: Home</section>
  <p>接口数据： {{homeInfo}}</p>
</div>
</template>
<script>
export default {
  serverRequest(store) {
    return store.dispatch('getHomeInfo')
  },
  mounted() {

  },
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo
    }
  }
}
</script>
