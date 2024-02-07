<template>
    <component :is="icon">
    </component>
</template>

<script>
    import logo from './logo.vue'
    import search from './search.vue'
    import bell from './bell.vue'
    import Avatar from './Avatar.vue'
    import pie from './chart-pie.vue'
    import arrowD from './arrow-down.vue'
    import doc from './document-report.vue'
    import bag from './shopping-bag.vue'
    import inbox from './inbox-in.vue'
    import vector from './vector.vue'
    import lock from './lock-closed.vue'
    import clList from './clipboard-list.vue'
    import collection from './collection.vue'
    import support from './support.vue'
    import globe from './globe.vue'
    import adjustments from './adjustments.vue'
    import cog from './cog.vue'
    import facebook from './facebook.vue'
    import twitter from './twitter.vue'
    import github from './github.vue'
    import dribble from './dribbble.vue'
    import Neil from './Neil.vue'
    import Bonnie from './Bonnie.vue'
    import Micheal from './Micheal.vue'
    import Thomas from './Thomas.vue'
    import Lana from './Lana.vue'
    import Karen from './Karen.vue'

    import login from './login.vue'
    import error from './404.vue'

    import burger from './burger.vue'
    import bell_notice from './bell-notice.vue'
    import sm_error from './sm-404.vue'

    export default {
        name: "icons",
        props: ['icon'],
        components: {
            logo,
            search,
            bell,
            Avatar,
            pie,
            arrowD,
            doc,
            bag,
            inbox,
            vector,
            lock,
            clList,
            collection,
            support,
            globe,
            adjustments,
            cog,
            facebook,
            twitter,
            github,
            dribble,
            Neil,
            Bonnie,
            Micheal,
            Thomas,
            Lana,
            Karen,

            login,
            error,

            burger,
            bell_notice,
            sm_error,
        },
    }
</script>

<style scoped>

</style>
