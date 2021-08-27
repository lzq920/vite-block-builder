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
  name: 'common.register',
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
