<template>
    <div class="w-full min-h-dvh"
         :class="{'dark' : mainStore.darkMode,'bg-grey-400':mobileMenu,'dark:bg-grey-400':mobileMenu}">
        <div class="w-full h-[70px] px-5 py-3 fixed bg-white dark:bg-gray-800 md:border-b-[1px] border-gray-200 flex justify-between"
             :class="{'border-b-[1px]':mobileMenu}"
        >
            <div class="md:w-[469px] h-[45px] flex justify-between items-center">
                <div class="items-center flex">
                    <router-link class="hidden md:block" :to="{name:'home'}">
                        <icons icon="logo"/>
                    </router-link>
                    <button class="md:hidden" @click="openMenu">
                        <icons icon="burger"/>
                    </button>
                </div>
                <div class="pl-[32px] pr-[15px] py-[13px] hidden md:flex relative">
                    <span class="absolute inset-y-0 left-[49px] flex items-center">
                       <icons icon="search"/>
                    </span>
                    <input class="w-[402px] h-[45px] pr-[15px] pl-[45px] py-[13px] text-base rounded-[16px] border-[1px] bg-main-bg dark:bg-grey-200 dark:text-grey-600 "
                           type="text"
                           placeholder="Search">
                </div>
            </div>
            <div class="flex items-center ">
                <div class="md:w-[40px] md:border-[2px] border-grey-400 dark:border-grey-100 rounded-full cursor-pointer"
                     @click="isDarkMode"
                >
                    <DarkMode :dark="mainStore.darkMode"/>
                </div>
                <div class="hidden md:flex items-center">
                    <button>
                        <icons class="ml-3" icon="bell"/>
                    </button>
                    <button>
                        <icons class="ml-3 size-8 rounded-full" icon="Avatar"/>
                    </button>
                </div>
                <div class="flex items-center md:hidden">
                    <icons class="ml-2.5" icon="bell_notice"/>
                    <icons class="ml-2.5 size-8 rounded-full" icon="Micheal"/>
                </div>

            </div>
        </div>

        <div class="w-full pt-[70px] md:min-w-[839px]  md:pl-[250px] flex"
             :class="{'justify-center': !mobileMenu,}"
        >
            <div class="md:w-[250px] w-[87%] pb-[70px] h-screen left-0 fixed border-r-[1px] bg-white dark:bg-gray-800 border-gray-200 md:flex flex-col justify-between"
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

            <div class="w-full p-4 bg-main-bg dark:bg-gray-800"
                 :class="{'bg-gray-400':mobileMenu,'hidden':mobileMenu}">

                <div class="md:p-8 mb-4 p-2 rounded-[16px] dark:border-[1px] dark:border-grey-600 bg-white dark:bg-gray-800 shadow-md dark:shadow-none"
                >
                    <div class="py-3.5 flex items-center">
                        <h2 class="text-xl font-interSemibold text-color-900 dark:text-gray-300">Sales</h2>
                        <icons class="ml-[13px]" icon="vector"/>
                    </div>
                    <div class="md:h-[571px] h-[491px] hidden md:block">
                        <Line :data="mainStore.salesData" :options="mainStore.optionsChart"/>
                    </div>
                    <div class="md:h-[571px] h-[491px] md:hidden">

                        <Line class="md:hidden" :data="mainStore.salesData"
                              :options="mainStore.mobileOptionsChart"/>
                    </div>
                </div>
                <div class="md:min-h-[448px] bg-white dark:bg-gray-800 md:flex ">
                    <div class="lg:w-[381px] p-4 md:shrink-0 rounded-[16px] bg-white dark:bg-gray-800 shadow-md dark:border-[1px] dark:border-grey-600 bg-white dark:bg-gray-800 shadow-md dark:shadow-none"
                    >
                        <ListItem headerList="Latest Customers" :items="mainStore.clients"/>
                    </div>
                    <div class="md:w-full p-4 md:ml-4 ml-0 md:mt-0 mt-4 rounded-[16px] bg-white dark:bg-gray-800 shadow-md dark:border-[1px] dark:border-grey-600 bg-white dark:bg-gray-800 shadow-md dark:shadow-none"
                    >
                        <ListItem headerList="Top products" :items="mainStore.products"/>
                    </div>
                </div>
                <div class="p-4 mt-4 rounded-[16px] bg-white dark:bg-gray-800 shadow-md dark:border-[1px] dark:border-grey-600 bg-white dark:bg-gray-800 shadow-md dark:shadow-none"
                >
                    <div class="pb-4">
                        <h2 class="text-xl font-interSemibold text-grey-900 dark:text-grey-200">Transactions
                        </h2>
                        <p class="text-sm font-normal text-gray-500">This is a list of latest transactions.</p>
                    </div>
                    <div class="">
                        <table class="table-auto w-full">
                            <thead>
                            <tr class="bg-main-bg dark:bg-grey-400 border-b-[1px]">
                                <th class="md:w-[269px] w-[207px] md:p-4 pl-4 py-4 text-gray-500 dark:text-main-bg text-start text-xs font-interSemibold border-b-[1px]">
                                    TRANSACTION
                                </th>
                                <th class="md:w-[357px] w-[93px] md:p-4 px-2 py-4 text-gray-500 dark:text-main-bg text-start text-xs font-interSemibold border-b-[1px]">
                                    DATE
                                    &
                                    TIME
                                </th>
                                <th class="w-[405px] p-4 hidden md:table-cell text-gray-500 dark:text-main-bg text-start text-xs font-interSemibold border-b-[1px]">
                                    AMOUNT
                                </th>
                                <th class="p-4 hidden md:table-cell text-gray-500 dark:text-main-bg text-start text-xs font-interSemibold border-b-[1px]">
                                    STATUS
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="dark:bg-grey-200" v-for="(transaction, index) in mainStore.transactions"
                                :key="index"
                                :class="{'bg-main-bg': index % 2 !== 0,'dark:bg-grey-400': index % 2 !== 0}"
                            >
                                <td class="p-4 text-start md:text-sm text-xs">
                                    <span class="text-gray-900 text-xs">Payment {{ transaction.paymentType }}</span>&nbsp;<span
                                        class="font-interSemibold">{{ transaction.payment }}</span>
                                </td>
                                <td class="md:p-4 px-2 py-4 text-start md:text-sm text-xs font-normal text-gray-500"
                                >{{ transaction.dateTime }}
                                </td>
                                <td class="p-4 hidden md:table-cell text-start text-base font-interMedium"
                                ><span v-if="transaction.paymentType === 'refund to'"
                                >-</span>${{ transaction.amount }}
                                </td>
                                <td class="p-4 hidden md:table-cell text-start">
                                    <payment-status :status="transaction.status"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4 pt-12 px-8 md:px-8 md:py-12 bg-white dark:bg-gray-800 rounded-[16px] md:flex justify-between">
                    <div class="md:w-[345px]"><p class="text-base text-cool-grey-500">© 2021 Themesberg, LLC. All
                        rights
                        reserved.</p></div>
                    <div class="w-[168px] md:pt-0 pt-12 flex justify-between">
                        <button>
                            <icons icon="facebook"/>
                        </button>
                        <button class="ml-6">
                            <icons icon="twitter"/>
                        </button>
                        <button class="ml-6">
                            <icons icon="github"/>
                        </button>
                        <button class="ml-6">
                            <icons icon="dribble"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import icons from '../components/IconsComponent.vue';
    import paymentStatus from '../components/PaymentStatus.vue';
    import {useMainStore} from "../stores/main";
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import {Line} from 'vue-chartjs'
    import ListItem from "../components/ListItem.vue";
    import DarkMode from "../components/DarkMode.vue";
    import Menu from "../components/ElementMenu.vue";
    import {ref} from 'vue';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    export default {
        name: 'HomeView',
        components: {Menu, DarkMode, ListItem, icons, Line, paymentStatus},

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
                mainStore,
                mobileMenu,
                isDarkMode,
                openMenu,

            }
        }
    }
</script>

<style scoped>
</style>
