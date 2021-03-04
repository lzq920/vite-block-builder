<template>
  <div>

  </div>
</template>

<script>
import {onMounted, reactive} from "vue";

export default {
  setup() {
    let data = reactive([]);
    const getPageList = async () => {
    };
    onMounted(() => {
      getPageList();
    });
    return {data};
  },
};
</script>

<style>
</style>
