<template>
  <div>123</div>
</template>
<script>
import api from '../interfaces'
import { onMounted } from 'vue'

export default {
  components: {},
  setup () {
    const getUserInfo = async () => {
      return await api.getUserInfo({
        id: 1,
        name: 1,
        sex: 1,
        age: 20
      })
    }
    onMounted(() => {
      getUserInfo()
    })
    return {}
  }
}
</script>

<style lang="less" scope>

</style>
