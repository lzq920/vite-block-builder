<template>
  <div>page list</div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  setup () {
    const data = reactive([])
    const getPageList = async () => {
    }
    onMounted(() => {
      getPageList()
    })
    return { data }
  }
}
</script>

<style>
</style>
