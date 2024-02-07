<template>
    <div class="min-h-dvh bg-main-bg">
        <div class="h-[64px] p-4 flex justify-between items-center md:hidden">
            <div class="">
                <icons icon="burger"/>
            </div>
            <div class="flex items-center">
                <icons icon="bell_notice"/>
                <icons class="ml-2.5 size-8 rounded-full" icon="Micheal"/>
            </div>
        </div>
        <div class="h-[65px] px-5 border-b-[1px] bg-white border-grey-200 flex justify-between items-center hidden md:flex"
        >
            <div class="flex">
                <div>
                    <icons icon="logo"/>
                </div>
                <div class="ml-8 flex items-center">
                    <div class="text-cool-grey-500 text-green-500 font-interMedium">Dashboard</div>
                    <div class="ml-4 text-cool-grey-500 font-interMedium">Team</div>
                    <div class="ml-4 text-cool-grey-500 font-interMedium">Projects</div>
                    <div class="ml-4 text-cool-grey-500 font-interMedium">Calendar</div>

                </div>

            </div>
            <div class="flex items-center">
                <div>
                    <icons icon="login"/>
                </div>
                <div class="ml-1.5 text-cool-grey-500 font-interMedium">Login/Register</div>
            </div>
        </div>
        <div class="md:pt-[31px] md:px-20 flex justify-between items-center flex-col">
            <div class="md:px-0 md:py-0 px-[10.5px] py-[32.5px]">
                <icons class="hidden md:block" icon="error"/>
                <icons class="md:hidden" icon="sm_error"/>
            </div>
            <div class="md:px-0 px-4 md:mt-0 mt-4 flex justify-between items-center flex-col">
                <div class=" text-center">
                    <h1 class="md:h-[62px] h-[45px] md:text-5xl text-3xl font-interBold font-black">Page not found</h1>
                    <p class="md:h-[24px] h-[72px] mt-2.5 text-center text-base font-normal text-cool-grey-500">Oops! Looks
                        like you
                        followed a bad link.
                        If you think this
                        is a problem with us, please tell us.</p>
                </div>
                <div class="mt-[22px]">
                    <router-link :to="{name:'home'}">
                        <button class="w-[131px] h-[39px] rounded-[12px] bg-green-500 text-white text-sm font-interSemibold cursor-pointer"
                        >Go back home
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from '../components/icons/icons.vue'

    export default {
        name: 'HomeView',
        components: {icons},
    }
</script>

<style scoped>

</style>
