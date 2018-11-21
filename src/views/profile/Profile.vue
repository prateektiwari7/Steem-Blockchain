<template>
  <div>
    <img :src="profileImage">
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
