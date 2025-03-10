<template>
    <button @click="generateError">Generate Error</button>
</template>

<script>
export default {
    methods: {
        generateError() {
            this.$refs.objEl.innerHTML = "hi";
        }
    }
}
</script>