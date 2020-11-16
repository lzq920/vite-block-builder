<template>
  <a-form layout="inline" :model="formInline" @submit="handleSubmit">
    <a-form-item>
      <a-input v-model:value="formInline.email" placeholder="Email"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-model:value="formInline.password"
        type="password"
        placeholder="Password"
      >
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.email === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, inject } from "vue";
import { user } from "../../interfaces";
import { message } from "ant-design-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const formInline = reactive({
      email: "",
      password: "",
    });
    const cloud = inject("cloud");
    const store = useStore();
    const router = useRouter();
    const handleSubmit = async () => {
      if (formInline.email === "" || formInline.password === "") {
        return message.error("邮箱或者密码为空");
      } else {
        try {
          const response = await cloud
            .auth({
              persistence: "local",
            })
            .signInWithEmailAndPassword(formInline.email, formInline.password);
          router.push({
            name: "index",
          });
        } catch (error) {
          message.error(error.message);
        }
      }
    };
    return { formInline, handleSubmit };
  },
};
</script>

<style></style>
