<template>
  <div>

  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const page = reactive({
      title: "",
      content: "",
    });
    const submit = async () => {

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
