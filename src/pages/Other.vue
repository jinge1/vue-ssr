<template>
  <div>
    <section>position: Other</section>
    <p>接口数据： {{otherInfo}}</p>
  </div>
</template>
<script>
export default {
  serverRequest(store) {
    return store.dispatch('getOtherInfo')
  },
  mounted() {

  },
  computed: {
    otherInfo() {
      return this.$store.state.otherInfo
    }
  }
}
</script>
