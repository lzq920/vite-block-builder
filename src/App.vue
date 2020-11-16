<template>
  <router-view></router-view>
</template>
<script>
import { provide } from "vue";
import { useCloudBase } from "./hooks/cloudbase";
export default {
  name: "App",
  components: {},
  setup() {
    const app = useCloudBase();
    provide("cloud", app);
  },
};
</script>
