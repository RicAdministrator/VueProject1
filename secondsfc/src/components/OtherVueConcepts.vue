<template>
    For each section, demo and explain the code.
    <p />
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

            <input id="rbRegularUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 1"
                v-on:change="ToggleUserRole($event)">
            <label for="rbRegularUser" style="margin-left: 5px;">Regular User</label>
            <input id="rbAdminUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 2"
                v-on:change="ToggleUserRole($event)" style="margin-left: 20px;">
            <label for="rbAdminUser" style="margin-left: 5px;">Admin User</label>
            <input id="rbSuperUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 3"
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
        <div>
            Access app data from App.vue and display in OtherVueConcepts.vue
            <br>
            Used Provide/Inject
            <br>
            <button class="w3-button w3-red" onclick="document.getElementById('id02').style.display='block'">
                Display app data
            </button>
            <div id="id02" class="w3-panel w3-green w3-display-container" style="display:none">
                <span onclick="this.parentElement.style.display='none'"
                    class="w3-button w3-red w3-display-topright">x</span>
                <p>{{ "User Id : " + appData.userId }}</p>
                <p>{{ "User Name : " + appData.userName }}</p>
                <p>{{ "Role Id : " + appData.roleId }}</p>
                <p>{{ "Role : " + appData.role }}</p>
            </div>
            <br>
        </div>

        <div>
            Vue event modifier > v-on:click.right.prevent

            <div style="border: solid 1px black; background-color: lightblue;"
                v-on:click.right.prevent="showRightClickMsg">Agent: Hello, how can I help you?</div>
            <div style="border: solid 1px black; margin-top: 5px;background-color: lightblue;"
                v-on:click.right.prevent="showRightClickMsg">Customer: I would like to know the status up my order. The
                order id is 1234567890</div>
        </div>

        <div>
            Validation using vue watchers
            <div class="w3-card-4">
                <div class="w3-container w3-brown">
                    <h2>Employee Form</h2>
                </div>
                <div class="w3-panel w3-pale-red w3-border" v-show="showEmptyFirstNameMessage || showEmptyLastNameMessage">
                    <h3>Please correct the following input errors:</h3>
                    <p v-show="showEmptyFirstNameMessage">First Name is required.</p>
                    <p v-show="showEmptyLastNameMessage">Last Name is required.</p>
                </div>
                <form class="w3-container">
                    <p>
                        <label class="w3-text-brown" for="txtFirstName"><b>First Name</b></label>
                        <input id="txtFirstName" class="w3-input w3-border w3-sand" type="text" v-model="inpFirstName">
                    </p>
                    <p>
                        <label for="txtLastName" class="w3-text-brown"><b>Last Name</b></label>
                        <input id="txtLastName" class="w3-input w3-border w3-sand" type="text" v-model="inpLastName">
                    </p>
                </form>
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
            userRoleId: 3,
            inpFirstName: "",
            inpLastName: "",
            showEmptyFirstNameMessage: true,
            showEmptyLastNameMessage: true
        }
    },
    inject: ['appData'],
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
        },
        showRightClickMsg() {
            alert("Notice that the default dropdown did not appear. We can now create our own right click function");
        }
    },
    watch: {
        inpFirstName(newVal) {
            this.showEmptyFirstNameMessage = newVal === "";
        },
        inpLastName(newVal) {
            this.showEmptyLastNameMessage = newVal === "";
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