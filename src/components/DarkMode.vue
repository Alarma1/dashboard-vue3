<template>
    <icons class="m-auto" icon="sun"
           :class="{'hidden': !dark}"
    />
    <icons class="m-auto" icon="moon"
           :class="{'hidden': dark}"
    />
</template>

<script>
    import icons from "./IconsComponent.vue";
    export default {
        name: "DarkMode",
        props: ['dark'],
        components: {icons}
    }
</script>

<style scoped>

</style>
