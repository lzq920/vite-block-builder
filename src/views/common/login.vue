<template>
    <div>
        <h1 @click="login">Login</h1>
    </div>
</template>

<script>
    import { user } from "../../interfaces";
    export default {
        name: "Login",
        setup() {
            return {};
        },
        methods: {
            async login() {
                // const response = await user.login({
                //     username: "123",
                //     password: "123456",
                // });
                this.$router.push({
                    name: "index",
                });
                this.$store.dispatch("setUserToken", "123123");
            },
        },
    };
</script>

<style></style>
