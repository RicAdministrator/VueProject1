<template>
    <div class="w3-card-4">
        <div class="w3-container w3-brown">
            <h2>Employee Form</h2>
        </div>
        <form class="w3-container">

            <p>
                <label class="w3-text-brown" for="txtFirstName"><b>First Name</b></label>
                <input id="txtFirstName" class="w3-input w3-border w3-sand" type="text" v-model="inpFirstName">
                <label for="txtFirstName" v-bind:class="{ 'w3-text-red': inpFirstName == '', 'w3-text-green': inpFirstName != '' }"
                    style="font-size: 10px;">required </label>
            </p>

            <p>
                <label for="txtLastName" class="w3-text-brown"><b>Last Name</b></label>
                <input id="txtLastName" class="w3-input w3-border w3-sand" type="text" v-model="inpLastName">
                <label for="txtLastName" v-bind:class="{ 'w3-text-red': inpLastName == '', 'w3-text-green': inpLastName != '' }"
                    style="font-size: 10px;">required </label>
            </p>

            <p>
                <label for="txtPhoneNumber" class="w3-text-brown"><b>Phone Number</b></label>
                <input id="txtPhoneNumber" class="w3-input w3-border w3-sand" type="text" v-model="inpPhoneNumber">
                <label for="txtPhoneNumber" v-bind:class="{ 'w3-text-red': inpPhoneNumber == '', 'w3-text-green': inpPhoneNumber != '' }" style="font-size: 10px;"> required, </label>
                <label for="txtPhoneNumber" v-bind:class="{ 'w3-text-red': inpPhoneNumber == '' || (inpPhoneNumber.match(/[^$,.\d]/) && inpPhoneNumber !=''), 'w3-text-green': !inpPhoneNumber.match(/[^$,.\d]/) && inpPhoneNumber !='' }" style="font-size: 10px;"> numeric</label>
            </p>

            <p>
                <label for="txtEmail" class="w3-text-brown"><b>Email</b></label>
                <input id="txtEmail" class="w3-input w3-border w3-sand" type="text" v-model="inpEmail">
                <label for="txtEmail" v-bind:class="{ 'w3-text-red': inpEmail == '', 'w3-text-green': inpEmail != '' }" style="font-size: 10px;"> required, </label>
                <label for="txtEmail" v-bind:class="{ 'w3-text-red': inpEmail == '' || (!emailPattern.test(inpEmail) && inpEmail !=''), 'w3-text-green': emailPattern.test(inpEmail) && inpEmail !='' }" style="font-size: 10px;"> valid email</label>
            </p>

            <p>
                <label for="txtPassword" class="w3-text-brown"><b>Password</b></label>
                <input id="txtPassword" class="w3-input w3-border w3-sand" type="text" v-model="inpPassword">
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': inpPassword == '', 'w3-text-green': inpPassword != '' }" style="font-size: 10px;"> required, </label>
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': inpPassword == '' || (!patternOneLowerCase.test(inpPassword) && inpPassword !=''), 'w3-text-green': patternOneLowerCase.test(inpPassword) && inpPassword !='' }" style="font-size: 10px;"> atleast 1 lowercase letter, </label>
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': !hasOneUppercaseChar(inpPassword), 'w3-text-green': hasOneUppercaseChar(inpPassword) }" style="font-size: 10px;"> atleast 1 uppercase letter, </label>
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': !hasOneNumericChar(inpPassword), 'w3-text-green': hasOneNumericChar(inpPassword) }" style="font-size: 10px;"> atleast 1 number, </label>
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': !hasOneSpecialChar(inpPassword), 'w3-text-green': hasOneSpecialChar(inpPassword) }" style="font-size: 10px;"> atleast 1 special char, </label>
                <label for="txtPassword" v-bind:class="{ 'w3-text-red': inpPassword.length < 10 || inpPassword.length > 15, 'w3-text-green': inpPassword.length > 9 && inpPassword.length < 16 }" style="font-size: 10px;"> 10 - 15 character </label>
            </p>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inpFirstName: "",
            inpLastName: "",
            inpPhoneNumber: "",
            inpEmail: "",
            emailPattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            inpPassword: "",
            patternOneLowerCase: new RegExp("^(?=.*[a-z]).+$"),
            //patternOneUpperCase: new RegExp("^(?=.*[A-Z]).+$")
        }
    },
    methods: {
        hasOneUppercaseChar(input) {
            const patternOneUpperCase = new RegExp("^(?=.*[A-Z]).+$")

            if (input != "") {
                return patternOneUpperCase.test(input)
            }            

            return false
        },
        hasOneNumericChar(input) {
            const patternOneNumeric = new RegExp("^(?=.*\\d).+$");

            if (input != "") {
                return patternOneNumeric.test(input)
            }            

            return false
        },
        hasOneSpecialChar(input) {
            const patternOneSpecial = new RegExp("^(?=.*[-+_!@#$%^&*., ?]).+$");

            if (input != "") {
                return patternOneSpecial.test(input)
            }            

            return false
        },
    }
}
</script>