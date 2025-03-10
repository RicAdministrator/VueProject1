<template>
    <div v-html="mountedVar"></div>
    <p />
    <div v-html="beforeUpdateVar"></div>
    <p />
    <div v-html="updatedVar" ref="refDivUpdated"></div>
    <p />
    <generate-error />
</template>

<script>
import GenerateError from '../components/GenerateError.vue'

let beforeCreateVar;

export default {
    data() {
        return {
            createdVar: "",
            beforeMountVar: "",
            mountedVar: "",
            beforeUpdateVar: "",
            updatedVar: ""
        }
    },
    components: {
        'generate-error': GenerateError
    },
    beforeCreate() {
        beforeCreateVar = "Has Value";
        console.log("beforeCreateVar : " + beforeCreateVar);
    },
    created() {
        this.createdVar = "Has Value";
        console.log("createdVar : " + this.createdVar);
    },
    beforeMount() {
        this.beforeMountVar = "Has Value";
        console.log("beforeMountVar : " + this.beforeMountVar);

    },
    mounted() {
        this.mountedVar =
            "beforeCreateVar : " + beforeCreateVar + "<br>" +
            "createdVar : " + this.createdVar + "<br>" +
            "beforeMountVar : " + this.beforeMountVar + "<br>" +
            "The component is mounted, vhtml is successful.";

        console.log("The component is mounted, vhtml is successful.");
    },
    beforeUpdate() {
        this.beforeUpdateVar = this.mountedVar + "<br>beforeUpdate was triggered because mountedVar was updated";
        console.log("beforeUpdate was triggered because mountedVar was updated");
    },
    updated() {
        //this.beforeUpdateVar = "";
        this.updatedVar = this.beforeUpdateVar + "<br>The component is updated. If we update beforeUpdateVar, we will get maximum recursive error.";
        console.log("The component is updated!");
    },
    beforeUnmount() {
        alert("beforeUnmount is called just before a component is removed from the DOM")
        alert("we can still access the variables in the data section")
        alert(this.updatedVar);
        alert("we can still access refs")
        alert(this.$refs.refDivUpdated.innerHTML);
    },
    unmounted() {
        alert("The component is removed (unmounted)!");
    },
    errorCaptured(error, compInst, errorInfo) {
        console.log("error: ", error);
        console.log("compInst: ", compInst);
        console.log("errorInfo: ", errorInfo);
    },
    renderTracked(evt) {
        console.log("renderTracked: ", evt);
        alert("renderTracked");
    },
    renderTriggered(evt) {
        console.log("renderTriggered: ", evt)
        alert("renderTriggered");
    },
    activated() {
        // To Do: Add keepalive logic so that caching will happen and activated will be triggerred
        console.log("activated");
        alert("activated");
    },
    deactivated() {
        // To Do: Add keepalive logic so that caching will happen and deactivated will be triggerred
        console.log("activated");
        alert("activated");
    },
    serverPrefetch() {
        // The 'serverPrefetch' hook is only called during server-side rendering (SSR).
        // Explore this if needed
    }
}
</script>