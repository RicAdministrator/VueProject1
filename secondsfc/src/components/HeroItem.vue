<template>
  <div>
    <img :src="heroPicture" alt="Avatar" style="height:150px;">
    <img src="/img_quality.svg" v-show="isFavorite" class="imgFavorite">
    <h2>
      {{ heroName }}
    </h2>
    <p>{{ heroDesc }}</p>
    <button @click="toggleFavorite">Favorite</button>
  </div>

</template>

<script>
export default {

  //props: ['heroName', 'heroDesc', 'heroPicture', 'isFavorite'],
  props: {
    heroName: {
      type: String,
      required: true
    },
    heroDesc: {
      type: String,
      required: true
    },
    heroPicture: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleFavorite() {
      alert(this.heroName)
      this.$emit('toggle-favorite', this.heroName);
    }
  }
};
</script>

<style>
.imgFavorite {
  height: 50px;
  float: right;
}
</style>