<template>
  <div>
    page add
    {{ title }}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const page = reactive({
      title: '',
      content: ''
    })
    const submit = async () => {

    }
    return {
      ...toRefs(page),
      submit
    }
  }
}
</script>

<style>
</style>
