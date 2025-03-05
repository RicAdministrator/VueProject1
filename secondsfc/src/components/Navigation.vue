<template>
    <div>
        <!-- Add vfor here, use data array -->
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'home' }"
            @click="setActivePage('home')">Home</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'heroes' }"
            @click="setActivePage('heroes')">Heroes</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'heroes-table' }"
            @click="setActivePage('heroes-table')">Heroes Table</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'field-validation' }"
            @click="setActivePage('field-validation')">Field Validation</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'enable-disable-form' }"
            @click="setActivePage('enable-disable-form')">Enable Disable Form</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'form-based-on-role' }"
            @click="setActivePage('form-based-on-role')">Form Based On Role</a>
        <a class="w3-bar-item w3-button w3-hover-blue"
            v-bind:class="{ 'w3-hide-small': !appIsSmallScreen, 'w3-blue': appSelectedPage === 'other-vue-concepts' }"
            @click="setActivePage('other-vue-concepts')">Other Vue Concepts</a>
    </div>
</template>

<script>
export default {
    props: ['appIsSmallScreen', 'appSelectedPage'],

    // fix for the following warnings:
    // 1) Extraneous non-emits event listeners (methodName) were passed to component but could not be automatically 
    // inherited because component renders fragment or text root nodes. If the listener is intended to be a component 
    // custom event listener only, declare it using the "emits" option.
    // 2) Component emitted event "x" but it is neither declared in the emits option nor as an "y" prop.
    emits: ["set-active-page"], // emits documentation

    methods: {
        setActivePage(selectedPage) {
            this.$emit('set-active-page', selectedPage);
        }
    }
};
</script>