<template>
    <div :class="{'dark' : mainStore.darkMode}">
        <div class="min-h-dvh bg-main-bg dark:bg-gray-800 pt-[64px]"
             :class="{'bg-grey-400':mobileMenu,'dark:bg-grey-400':mobileMenu}">
            <div class="w-full md:h-[65px] h-[64px] md:px-5 p-4 top-0 fixed md:border-b-[1px] bg-white dark:bg-gray-800 border-grey-200 flex justify-between items-center flex"
                 :class="{'border-b-[1px]':mobileMenu}">
                <div class="flex">
                    <div>
                        <div class="hidden md:block">
                            <router-link :to="{name:'home'}">
                                <icons icon="logo"/>
                            </router-link>
                        </div>
                        <button class="md:hidden" @click="openMenu">
                            <icons icon="burger"/>
                        </button>
                    </div>
                    <div class="ml-8 hidden md:flex items-center">
                        <div class="text-cool-grey-500 ">
                            <router-link class="text-green-500 font-interMedium" to="">Dashboard</router-link>
                        </div>
                        <div class="ml-4">
                            <router-link class="text-cool-grey-500 font-interMedium dark:text-grey-200" to="">Team
                            </router-link>
                        </div>
                        <div class="ml-4">
                            <router-link class="text-cool-grey-500 font-interMedium dark:text-grey-200" to="">Projects
                            </router-link>
                        </div>
                        <div class="ml-4">
                            <router-link class="text-cool-grey-500 font-interMedium dark:text-grey-200" to="">Calendar
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="md:w-[40px] md:border-[2px] border-grey-400 dark:border-grey-100 rounded-full"
                         @click="isDarkMode"
                    >
                        <DarkMode :dark="mainStore.darkMode"/>

                    </div>
                    <div class="ml-3 hidden md:flex">
                        <router-link to="">
                            <div class="flex">
                                <icons icon="login"/>
                                <h2 class="ml-1.5 text-cool-grey-500 font-interMedium dark:text-grey-200">
                                    Login/Register</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="flex items-center md:hidden">
                        <icons class="ml-2.5" icon="bell_notice"/>
                        <icons class="ml-2.5 size-8 rounded-full" icon="Micheal"/>
                    </div>
                </div>
            </div>
            <div>
                <div class="md:w-[250px] w-[87%] pb-[70px] h-screen left-0 fixed border-r-[1px] bg-white dark:bg-gray-800 border-gray-200 flex flex-col justify-between md:hidden"
                     :class="{'hidden': !mobileMenu,}"
                >
                    <div class="pt-4">
                        <Menu :menu="mainStore.mainMenu"/>
                    </div>
                    <div class="mb-4 flex items-center justify-center">
                        <button>
                            <icons icon="adjustments"/>

                        </button>
                        <button class="ml-[22px]">
                            <icons icon="globe"/>
                        </button>
                        <button class="ml-[22px]">
                            <icons icon="cog"/>
                        </button>
                    </div>
                </div>
                <div class="md:pt-[31px] md:px-20 md:flex justify-between items-center flex-col"
                     :class="{'hidden': mobileMenu}">
                    <div class="md:px-0 md:py-0 px-[10.5px] py-[32.5px]">
                        <icons class="hidden md:block" icon="error"/>
                        <icons class="md:hidden" icon="sm_error"/>
                    </div>
                    <div class="md:px-0 px-4 md:mt-0 mt-4 flex justify-between items-center flex-col">
                        <div class=" text-center">
                            <h1 class="md:h-[62px] h-[45px] md:text-5xl text-3xl font-interBold font-black text-color-900 dark:text-grey-200"
                            >Page not found</h1>
                            <p class="md:h-[24px] h-[72px] mt-2.5 text-center text-base font-normal text-cool-grey-500">
                                Oops!
                                Looks
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

        </div>
    </div>
</template>

<script>
    import icons from '../components/IconsComponent.vue'
    import {useMainStore} from "../stores/main";
    import DarkMode from "../components/DarkMode.vue";
    import Menu from "../components/ElementMenu.vue";
    import {ref} from "vue";

    export default {
        name: 'HomeView',
        components: {DarkMode, icons, Menu},
        setup() {
            const mainStore = useMainStore()
            const mobileMenu = ref(false)
            const isDarkMode = () => {
                mainStore.isDarkModeAction()
            }
            const openMenu = () => {
                mobileMenu.value = !mobileMenu.value
                console.log(mobileMenu.value)
            }
            return {
                mobileMenu,
                mainStore,
                isDarkMode,
                openMenu
            }
        }

    }
</script>

<style scoped>

</style>
