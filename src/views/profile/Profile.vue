<template>
  <div>
    <img src="/Users/yudiz/Documents/test-del/steamblockchain/vue-steem/src/views/profile/desktop.jpeg" >
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    props: {
      profileImage: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
</style>
