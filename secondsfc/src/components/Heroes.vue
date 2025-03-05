<template>
    <!-- Used components, v-for components, props, props type, requried props, emit, v-bind:src, v-on:click, text
    interpolation, data property and methods property. -->
    Demo Heroes page
    <br>
    Explain HeroItem.vue
    <br>
    Explain Heroes.vue
    <p />
    <label class="w3-text-black"><b>Select your favorite hero:</b></label>
    <div id="wrapper">
        <!-- If you don't supply hero-name, hero-desc, hero-picture and is-favorite 
             you will get a missing required prop error. See "HeroItem.vue > props" section
        -->
        <hero-item v-for="x in heroes" :key="x.name" :hero-name="x.name" :hero-desc="x.desc" :hero-picture="x.picture"
            :is-favorite="x.favorite" @toggle-favorite="receiveEmit" />
    </div>
    <div>
        <!-- Text Interpolation -->
        {{ heroes }}
    </div>

</template>

<script>
export default {
    data() {
        return {
            heroes: [
                // this will cause a warning since name is an int instead of string
                //{ name: 1, desc: 'A ninja who holds the coveted Scarlet techniques.', picture: "/hanabi.jfif", favorite: false },

                { name: 'Hanabi', desc: 'A ninja who holds the coveted Scarlet techniques.', picture: "/hanabi.jfif", favorite: false },
                { name: 'Lesley', desc: "Harley's guardian and a talented sniper.", picture: "/lesley.webp", favorite: false },
                { name: 'Layla', desc: 'A skilled marksman who carries a Malefic Gun.', picture: "/layla.webp", favorite: false },
                { name: 'Diggie', desc: 'A little owl with a penchant for timepieces.', picture: "/diggie.webp", favorite: false },
                { name: 'Vexana', desc: 'The young duchess that guards the Necrokeep.', picture: "/vexana.webp", favorite: false }
            ]
        };
    },
    inject: ['appData'],
    methods: {
        receiveEmit(heroId) {
            let foundHero = this.heroes.find(
                hero => hero.name === heroId
            );
            foundHero.favorite = !foundHero.favorite;
        }
    }
}
</script>

<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
}

#wrapper>div {
    border: dashed white 2px;
    flex-basis: 200px;
    margin: 10px;
    padding: 10px;
    background-color: black;
    color: white;
}
</style>