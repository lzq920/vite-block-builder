<template>
    <div>
        <h1>Register</h1>
    </div>
</template>

<script>
    import cloudbase from "../../hooks/cloudbase";
    export default {
        name: "Register",
        setup() {
            const {app} = cloudbase();
            console.log(app);
            return {};
        },
    };
</script>

<style></style>
