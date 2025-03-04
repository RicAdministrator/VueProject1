<template>
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
</template>
<script>
export default {
    props: ['appIsSmallScreen', 'appSelectedPage'],
    methods: {
        setActivePage(selectedPage) {
            this.$emit('set-active-page', selectedPage);
        }
    }
};
</script>