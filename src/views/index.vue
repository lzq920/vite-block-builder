<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }"
    >
      <div class="logo">Vite App</div>
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        @select="menuSelect"
      >
        <a-menu-item key="pageList">
          <span class="nav-text">页面列表</span>
        </a-menu-item>
        <a-menu-item key="pageCreate">
          <span class="nav-text">新建页面</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-button @click="logout">{{ userInfo.email }}</a-button>
      </a-layout-header>
      <a-breadcrumb :style="{ margin: '24px 16px 0 16px' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            textAlign: 'center',
          }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { onMounted, reactive, ref, toRefs, inject } from "vue";
import { user } from "../interfaces";
import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    const cloud = inject("cloud");
    const router = useRouter();
    let userInfo = ref({});
    const selectedKeys = reactive(["4"]);
    const getUserInfo = async () => {
      userInfo.value = await cloud.auth().getCurrenUser();
    };
    const logout = async () => {
      await cloud.auth().signOut();
      router.replace("/login");
    };
    const menuSelect = ({ item, key, selectedKeys }) => {
      router.push({
        name: key,
      });
    };
    onMounted(async () => {
      await getUserInfo();
    });
    return {
      selectedKeys,
      menuSelect,
      userInfo,
      logout,
    };
  },
};
</script>

<style lang="less" scope>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(24, 144, 255, 1);
}
</style>
