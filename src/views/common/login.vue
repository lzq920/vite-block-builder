<template>
  <div @click="handleSubmit">登录</div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import api from '../../interfaces'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    const formInline = reactive({
      username: '',
      password: ''
    })
    const handleSubmit = async () => {
      const { data } = await api.login({
        username: formInline.username,
        password: formInline.password
      })
      await store.dispatch('user/setToken', data.token)
      router.push('/')
    }
    return {
      formInline,
      handleSubmit
    }
  }
}
</script>

<style>
</style>
