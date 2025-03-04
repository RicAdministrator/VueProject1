<template>
  <div class="w3-bar w3-green">
    <navigation :app-is-small-screen="false" :app-selected-page="toggleValue" @set-active-page="setAppActivePage" />
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
      v-on:click="aaaTest">&#9776;</a>
  </div>
  <div id="demo" class="w3-bar-block w3-green w3-hide w3-hide-large w3-hide-medium">
    <navigation :app-is-small-screen="true" :app-selected-page="toggleValue" @set-active-page="setAppActivePage" />
  </div>
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
    setAppActivePage(selectedPage) {
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