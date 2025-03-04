<template>
    <div class="w3-card-4">
        <div class="w3-container w3-brown">
            <h2>Patient Form</h2>
        </div>
        <form class="w3-container">
            <p>
                <label class="w3-text-brown"><b>First Name</b></label>
                <input class="w3-input w3-border w3-sand" type="text">
            </p>
            <p>
                <label class="w3-text-brown"><b>Last Name</b></label>
                <input class="w3-input w3-border w3-sand" type="text">
            </p>
            <p>
                <label class="w3-text-brown"><b>Are you under 18?</b></label>
                <input id="chkYes" class="w3-check" style="margin-left: 20px;" type="checkbox"
                    v-bind:checked="counter === 1" v-on:change="ToggleYesNo($event)">
                <label class="w3-text-brown" style="margin-left: 5px;"><b>Yes</b></label>
                <input id="chkNo" class="w3-check" style="margin-left: 20px;" type="checkbox"
                    v-bind:checked="counter === 2" v-on:change="ToggleYesNo($event)">
                <label class="w3-text-brown" style="margin-left: 5px;"><b>No</b></label>
            </p>
            <p>
                <label class="w3-text-brown"><b>Guardian First Name</b></label>
                <input class="w3-input w3-border" type="text" v-bind:disabled="counter != 1" v-bind:class="{
                    'w3-sand': counter == 1,
                    'w3-gray': counter != 1,
                    'w3-text-black': counter == 1,
                    'w3-text-gray': counter != 1
                }">
            </p>
            <p>
                <label class="w3-text-brown"><b>Guardian Last Name</b></label>
                <input class="w3-input w3-border" type="text" v-bind:disabled="counter != 1" v-bind:class="{
                    'w3-sand': counter == 1,
                    'w3-gray': counter != 1,
                    'w3-text-black': counter == 1,
                    'w3-text-gray': counter != 1
                }">
            </p>
            <p>
                <label class="w3-text-brown"><b>Guardian Phone Number</b></label>
                <input class="w3-input w3-border" type="text" v-bind:disabled="counter != 1" v-bind:class="{
                    'w3-sand': counter == 1,
                    'w3-gray': counter != 1,
                    'w3-text-black': counter == 1,
                    'w3-text-gray': counter != 1
                }">
            </p>
            <p>
                <label class="w3-text-brown"><b>Guardian Address</b></label>
                <textarea class="w3-input w3-border" style="resize:none" v-bind:disabled="counter != 1" v-bind:class="{
                    'w3-sand': counter == 1,
                    'w3-gray': counter != 1,
                    'w3-text-black': counter == 1,
                    'w3-text-gray': counter != 1
                }"></textarea>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        ToggleYesNo(e) {
            if (e.target.id === "chkYes") {
                if (this.counter === 0) {
                    this.counter = 1;
                }
                else if (this.counter === 1) {
                    this.counter = 0;
                }
                else if (this.counter === 2) {
                    this.counter = 1;
                }
            }
            else if (e.target.id === "chkNo") {
                if (this.counter === 0) {
                    this.counter = 2;
                }
                else if (this.counter === 1) {
                    this.counter = 2;
                }
                else if (this.counter === 2) {
                    this.counter = 0;
                }
            }
        }
    }
}
</script>