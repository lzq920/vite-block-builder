<template>
  <transition name="el-fade-in">
    <router-view />
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlockLayout'
})
</script>

<style scoped>

</style>
