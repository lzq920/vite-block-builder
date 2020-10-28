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
            >
                <a-menu-item key="1">
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-breadcrumb :style="{ margin: '24px 16px 0 16px' }">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item
                    ><a href="">Application Center</a></a-breadcrumb-item
                >
                <a-breadcrumb-item
                    ><a href="">Application List</a></a-breadcrumb-item
                >
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content
                :style="{ margin: '24px 16px 0', overflow: 'initial' }"
            >
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
    export default {
        components: {},
        data() {
            return {
                selectedKeys: ["4"],
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
