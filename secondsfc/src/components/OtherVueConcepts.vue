<template>
    <div id="dvOtherVueConcepts">
        <div>
            JavaScript in Text Interpolation<br>

            <!-- JavaScript in Text Interpolation -->
            {{ 'Random number: ' + Math.ceil(Math.random() * 6) }}
        </div>
        <div>
            <div v-bind:style="{ fontSize: sampleSize, margin: sampleMargin, backgroundColor: sampleBackgroundcolor }">
                Bind style using data properties
            </div>
        </div>
        <div>
            <div :style="{ fontSize: sampleSize, margin: sampleMargin, backgroundColor: sampleBackgroundcolor }">
                Shorthand for "v-bind:" is ":"
            </div>
        </div>
        <div>
            Used v-if, v-bind, v-on, data property and methods property
            <br>
            Regular User, Admin User and Super User Links
            <br>

            <input id="rbRegularUser" class="w3-radio" type="radio" :checked="userRoleId === 1"
                v-on:change="ToggleUserRole($event)">
            <label for="rbRegularUser" style="margin-left: 5px;">Regular User</label>
            <input id="rbAdminUser" class="w3-radio" type="radio" :checked="userRoleId === 2"
                v-on:change="ToggleUserRole($event)" style="margin-left: 20px;">
            <label for="rbAdminUser" style="margin-left: 5px;">Admin User</label>
            <input id="rbSuperUser" class="w3-radio" type="radio" :checked="userRoleId === 3"
                v-on:change="ToggleUserRole($event)" style="margin-left: 20px;">
            <label for="rbSuperUser" style="margin-left: 5px;">Super User</label>
            <p />
            <div class="w3-bar w3-black">
                <div v-if="userRoleId === 1 || userRoleId === 2 || userRoleId === 3">
                    <a href="#" class="w3-bar-item w3-button">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button">Link 3</a>
                </div>
                <div v-if="userRoleId === 2 || userRoleId === 3">
                    <a href="#" class="w3-bar-item w3-button">Link 4</a>
                    <a href="#" class="w3-bar-item w3-button">Link 5</a>
                    <a href="#" class="w3-bar-item w3-button">Link 6</a>
                </div>
                <div v-if="userRoleId === 3">
                    <a href="#" class="w3-bar-item w3-button">Link 7</a>
                    <a href="#" class="w3-bar-item w3-button">Link 8</a>
                    <a href="#" class="w3-bar-item w3-button">Link 9</a>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            sampleSize: "20px",
            sampleMargin: "5px",
            sampleBackgroundcolor: "yellow",
            userRoleId: 3
        }
    },
    methods: {
        ToggleUserRole(e) {
            switch (e.target.id) {
                case "rbRegularUser":
                    this.userRoleId = 1
                    break;
                case "rbAdminUser":
                    this.userRoleId = 2
                    break;
                case "rbSuperUser":
                    this.userRoleId = 3
                    break;
            }
        }
    }
}
</script>

<style>
#dvOtherVueConcepts>div {
    border: solid 2px black;
    padding: 5px;
    margin-bottom: 5px;
}
</style>