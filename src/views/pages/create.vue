<template>
  <div>
    <a-form :model="page" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-item label="Title">
        <a-input v-model:value="page.title" />
      </a-form-item>
      <a-form-item label="Content">
        <a-input v-model:value="page.content" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useCloudBase } from "../../hooks/cloudbase";
import { message } from "ant-design-vue";
export default {
  setup() {
    const app = useCloudBase();
    const db = app.database();
    const collection = db.collection("page");
    const page = reactive({
      title: "",
      content: "",
    });
    const submit = async () => {
      const response = await collection.add(page);
      if (response.id) {
        message.success("添加成功");
      }
    };
    return {
      page,
      submit,
    };
  },
};
</script>

<style>
</style>