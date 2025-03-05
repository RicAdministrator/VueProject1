<template>
    <!-- Used components, v-show, v-bind, v-on, data property and methods property.
    <br>
    Use v-show for scenarios wherein the condition can change a lot. -->
    Demo Form Based On Role page
    <br>
    Explain FormBasedOnRole.vue
    <p />
    <input id="rbRegularUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 1"
        v-on:change="ToggleUserRole($event)">
    <label id="lblRegularUser" for="rbRegularUser">Regular User</label>
    <input id="rbAdminUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 2"
        v-on:change="ToggleUserRole($event)">
    <label id="lblAdminUser" for="rbAdminUser">Admin User</label>
    <input id="rbSuperUser" class="w3-radio" type="radio" v-bind:checked="userRoleId === 3"
        v-on:change="ToggleUserRole($event)">
    <label id="lblSuperUser" for="rbSuperUser">Super User</label>
    <p />

    <!-- Visible for all roles -->
    <div class="w3-card-4">
        <div class="w3-container w3-brown">
            <h2>Form that should be filled by Regular, Admin and Super users</h2>
        </div>
        <div class="w3-container">
            <p>
                <label for="txtField1" class="w3-text-brown"><b>Field 1</b></label>
                <input id="txtField1" class="w3-input w3-border w3-sand" type="text">
            </p>
        </div>
    </div>

    <!-- Visible for Admin and Super User -->
    <div class="w3-card-4" style="margin-top: 20px;" v-show="userRoleId > 1">
        <div class="w3-container w3-brown">
            <h2>Form that should be filled by Admin and Super users</h2>
        </div>
        <div class="w3-container">
            <p>
                <label for="txtField2" class="w3-text-brown"><b>Field 2</b></label>
                <input id="txtField2" class="w3-input w3-border w3-sand" type="text">
            </p>
        </div>
    </div>

    <!-- Visible for Super User -->
    <div class="w3-card-4" style="margin-top: 20px;" v-show="userRoleId === 3">
        <div class="w3-container w3-brown">
            <h2>Form that should be filled by Super users</h2>
        </div>
        <div class="w3-container">
            <p>
                <label for="txtField3" class="w3-text-brown"><b>Field 3</b></label>
                <input id="txtField3" class="w3-input w3-border w3-sand" type="text">
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userRoleId: 1
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
#lblRegularUser {
    margin-left: 5px;
}

#rbAdminUser {
    margin-left: 20px;
}

#lblAdminUser {
    margin-left: 5px;
}

#rbSuperUser {
    margin-left: 20px;
}

#lblSuperUser {
    margin-left: 5px;
}
</style>