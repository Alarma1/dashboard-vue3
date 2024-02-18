<template>
    <component :is="icon">
    </component>
</template>

<script>
    import sun from './icons/sun.vue'
    import moon from './icons/moon.vue'
    import logo from './icons/logo.vue'
    import search from './icons/search.vue'
    import bell from './icons/bell.vue'
    import Avatar from './icons/Avatar.vue'
    import pie from './icons/chart-pie.vue'
    import arrowD from './icons/arrow-down.vue'
    import doc from './icons/document-report.vue'
    import bag from './icons/shopping-bag.vue'
    import inbox from './icons/inbox-in.vue'
    import vector from './icons/vector.vue'
    import lock from './icons/lock-closed.vue'
    import clList from './icons/clipboard-list.vue'
    import collection from './icons/collection.vue'
    import support from './icons/support.vue'
    import globe from './icons/globe.vue'
    import adjustments from './icons/adjustments.vue'
    import cog from './icons/cog.vue'
    import facebook from './icons/facebook.vue'
    import twitter from './icons/twitter.vue'
    import github from './icons/github.vue'
    import dribble from './icons/dribbble.vue'
    import Neil from './icons/Neil.vue'
    import Bonnie from './icons/Bonnie.vue'
    import Micheal from './icons/Micheal.vue'
    import Thomas from './icons/Thomas.vue'
    import Lana from './icons/Lana.vue'
    import Karen from './icons/Karen.vue'

    import login from './icons/login.vue'
    import error from './icons/404.vue'

    import burger from './icons/burger.vue'
    import bell_notice from './icons/bell-notice.vue'
    import sm_error from './icons/sm-404.vue'

    export default {
        name: "icons",
        props: ['icon'],
        components: {
            sun,
            moon,
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
