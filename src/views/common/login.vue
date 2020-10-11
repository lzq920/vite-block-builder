<template>
    <div>
        <h1>Login</h1>
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
                const response = await user.login({
                    username: "123",
                    password: "123456",
                });
            },
        },
    };
</script>

<style></style>
