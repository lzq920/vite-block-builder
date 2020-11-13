<template>
  <div>
    <h1 @click="register">Register</h1>
  </div>
</template>

<script>
import { useCloudBase } from "../../hooks/cloudbase";
import { message } from "ant-design-vue";
export default {
  name: "Register",
  setup() {
    const app = useCloudBase();
    const register = async () => {
      const email = "";
      const password = "";
      try {
        const response = await app
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
