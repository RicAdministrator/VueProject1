<template>
    <div>
        <h2 class="counter">{{ counter }}</h2>
        <button class="counter-button" @click="incrementCounter">Click</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 42
        }
    },
    methods: {
        incrementCounter() {
            this.counter++;
        }
    }
}
</script>

<style>
.counter-button {
    font-size: 1rem;
    padding: 5px 10px;
    color: #585858;
}

.counter {
    color: red;
}
</style>