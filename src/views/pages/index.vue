<template>
  <div
    v-for="item in 1000"
    :key="item"
  >
    page list
  </div>
</template>

<script>
import { onMounted, reactive, defineComponent } from 'vue'

export default defineComponent({
  name: 'pages.index',
  setup () {
    const data = reactive([])
    const getPageList = async () => {
    }
    onMounted(() => {
      getPageList()
    })
    return { data }
  }
})
</script>

<style>
</style>
