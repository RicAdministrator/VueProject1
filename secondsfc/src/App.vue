<template>
  <div class="w3-bar w3-green">
    <navigation :app-is-small-screen="false" :app-selected-page="toggleValue" @set-active-page="setAppActivePage" />
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
      v-on:click="burgerClicked">&#9776;</a>
  </div>
  <div id="demo" class="w3-bar-block w3-green w3-hide w3-hide-large w3-hide-medium">
    <navigation :app-is-small-screen="true" :app-selected-page="toggleValue" @set-active-page="setAppActivePage" />
  </div>
  <br>
  <component :is="activeComp"></component>

  <!-- Uncomment to test local components error -->
  <!-- <scoped-styling /> -->
</template>

<script>
import LifecycleHooks from './components/LifecycleHooks.vue';

export default {
  data() {
    return {
      toggleValue: "home",
      appData: { userId: 1, userName: 'RicAdmin', roleId: 1, role: "Super User" }
    }
  },
  computed: {
    activeComp() {
      return this.toggleValue
    },
  },
  methods: {
    burgerClicked() {
      var x = document.getElementById("demo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    },
    setAppActivePage(selectedPage) {
      this.toggleValue = selectedPage
    }
  },
  provide() {
    return {
      appData: this.appData
    }
  },
  components: {
    'lifecycle-hooks': LifecycleHooks
  }
}
</script>

<style></style>