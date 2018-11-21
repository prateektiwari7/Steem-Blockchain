<template>
  <div>
    <Profile
     v-if="loaded"
     :profile-image="result.profile.profile_image"
    />
  </div>
</template>

<script>
import steem from 'steem'
export default {
  name: 'ProfileContainer',
  data () {
    return {
      result: {},
      loaded: false
    }
  },
  mounted () {
    steem.api.setOptions({ url: 'https://api.steemit.com' })
    steem.api.getAccounts(['xenetics'], (err, result) => {
      this.result = JSON.parse((result[0].json_metadata))
      this.loaded = true
      console.log(err)
    })
  }
}
</script>

<style scoped>
</style>
