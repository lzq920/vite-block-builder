<template>
    <div class="app">123123</div>
</template>
<script>
    export default {
        name: "App",
        components: {},
        mounted() {
            console.log(import.meta.env.MODE);
            console.log(import.meta.env.VITE_BASE_URL);
        },
    };
</script>
<style scoped></style>
