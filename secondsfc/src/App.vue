<template>
  <div class="w3-bar w3-green">
    <navigation :app-is-small-screen="false" :app-selected-page="toggleValue" @set-active-page="setActivePage" />
    <!-- <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small" v-bind:class="{ 'w3-blue': toggleValue === 'heroes' }"
      @click="toggleValue = 'heroes'">Heroes</a>
    <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small"
      v-bind:class="{ 'w3-blue': toggleValue === 'heroes-table' }" @click="toggleValue = 'heroes-table'">Heroes
      Table</a>
    <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small"
      v-bind:class="{ 'w3-blue': toggleValue === 'field-validation' }" @click="toggleValue = 'field-validation'">Field
      Validation</a>
    <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small"
      v-bind:class="{ 'w3-blue': toggleValue === 'enable-disable-form' }"
      @click="toggleValue = 'enable-disable-form'">Enable Disable Form</a>
    <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small"
      v-bind:class="{ 'w3-blue': toggleValue === 'form-based-on-role' }"
      @click="toggleValue = 'form-based-on-role'">Form Based On Role</a>
    <a class="w3-bar-item w3-button w3-hover-blue w3-hide-small"
      v-bind:class="{ 'w3-blue': toggleValue === 'other-vue-concepts' }"
      @click="toggleValue = 'other-vue-concepts'">Other Vue Concepts</a> -->
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
      v-on:click="aaaTest">&#9776;</a>
  </div>
  <div id="demo" class="w3-bar-block w3-green w3-hide w3-hide-large w3-hide-medium">
    <navigation :app-is-small-screen="true" :app-selected-page="toggleValue" @set-active-page="setActivePage" />
    <!-- <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'heroes' }"
      @click="toggleValue = 'heroes'">Heroes</a>
    <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'heroes-table' }"
      @click="toggleValue = 'heroes-table'">Heroes
      Table</a>
    <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'field-validation' }"
      @click="toggleValue = 'field-validation'">Field
      Validation</a>
    <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'enable-disable-form' }"
      @click="toggleValue = 'enable-disable-form'">Enable Disable Form</a>
    <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'form-based-on-role' }"
      @click="toggleValue = 'form-based-on-role'">Form Based On Role</a>
    <a class="w3-bar-item w3-button w3-hover-blue" v-bind:class="{ 'w3-blue': toggleValue === 'other-vue-concepts' }"
      @click="toggleValue = 'other-vue-concepts'">Other Vue Concepts</a> -->
  </div>
  <!-- <navigation :app-is-small-screen="false" :app-selected-page="toggleValue" @set-active-page="setActivePage" /> -->
  <!-- {{ toggleValue  }} -->
  <br>
  <component :is="activeComp"></component>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  data() {
    return {
      toggleValue: "heroes"
    }
  },
  computed: {
    activeComp() {
      return this.toggleValue
    },
  },
  methods: {
    aaaTest() {
      var x = document.getElementById("demo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    },
    setActivePage(selectedPage) {
      //alert(selectedPage)
      this.toggleValue = selectedPage
    }
  },
  // provide() {
  //   return {
  //     toggleValue: this.toggleValue
  //   }
  // }
}
</script>

<style></style>