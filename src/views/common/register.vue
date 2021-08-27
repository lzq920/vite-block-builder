<template>
  <div>
    <h1 @click="register">
      Register
    </h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CommonRegister',
  setup () {
    const register = async () => {

    }
    return {
      register
    }
  }
})
</script>

<style></style>
