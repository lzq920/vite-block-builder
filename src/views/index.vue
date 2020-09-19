<template>
    <div class="index">
        <h1>{{ text }}</h1>
        <h3>当前环境：{{ env }}</h3>
        <h3>当前接口：{{ api }}</h3>
        <h3>{{ $store.state.count }}</h3>
        <h3>{{ cdn }}</h3>
    </div>
</template>

<script>
    import { onMounted, ref, nextTick } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import { useStore } from "vuex";
    export default {
        name: "Index",
        setup() {
            const router = useRouter(); //获取router
            const route = useRoute(); //获取route
            const text = ref("Hello World");
            const store = useStore(); //获取store
            const env = import.meta.env.MODE; //获取当前环境变量
            const api = import.meta.env.VITE_BASE_URL; //获取当前API接口地址
            const onClick = () => {
                console.log("hhh");
            };
            onMounted(() => {
                store.dispatch("addCount", 2333);
            });
            return {
                text,
                env,
                api,
                onClick,
            };
        },
        mounted() {
            console.log(this.cdn);
        },
    };
</script>
<style scoped>
    .index {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
