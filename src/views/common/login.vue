<template>
  <div>123</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Login',
  setup () {
    const formInline = reactive({
      email: '',
      password: ''
    })
    const handleSubmit = async () => {

    }
    return { formInline, handleSubmit }
  }
}
</script>

<style></style>
