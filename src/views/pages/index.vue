<template>
  <div>page list</div>
</template>

<script>
import { onMounted, reactive, defineComponent } from 'vue'

export default defineComponent({
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
