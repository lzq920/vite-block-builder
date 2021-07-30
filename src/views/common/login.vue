<template>
  <div @click="handleSubmit">登录</div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup () {
    const store = useStore()
    const router = useRouter()
    const formInline = reactive({
      email: '',
      password: ''
    })
    const handleSubmit = async () => {
      await store.dispatch('user/setUser', {
        token: 'token',
        avatar: 'https://via.placeholder.com/150',
        username: '2333'
      })
      await store.dispatch('role/setRole', ['admin'])
      router.push({
        name: 'index'
      })
    }
    return {
      formInline,
      handleSubmit
    }
  }
}
</script>

<style></style>
