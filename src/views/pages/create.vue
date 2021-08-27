<template>
  <div>
    page add
    {{ title }}
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'pages.create',
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
})
</script>

<style>
</style>
