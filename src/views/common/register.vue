<template>
  <div>
    <h1 @click="register">Register</h1>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { inject } from "vue";
export default {
  name: "Register",
  setup() {
    const cloud = inject("cloud");
    const register = async () => {
      const email = "";
      const password = "";
      try {
        const response = await cloud
          .auth()
          .signUpWithEmailAndPassword(email, password);
        message.info("注册邮件已经发送到您的邮箱，请注意查收！");
      } catch (error) {
        message.error(error.message);
      }
    };
    return {
      register,
    };
  },
};
</script>

<style></style>
