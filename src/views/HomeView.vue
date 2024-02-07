<template>
    <div class="w-full min-h-dvh">
        <div>
            <div class="h-[64px] p-4 bg-white flex justify-between items-center md:hidden">
                <div class="">
                    <icons icon="burger"/>
                </div>
                <div class="flex items-center">
                    <icons icon="bell_notice"/>
                    <icons class="ml-2.5 size-8 rounded-full" icon="Micheal"/>
                </div>
            </div>
        </div>
        <div class="w-full h-[70px] px-5 py-3 bg-white border-b-[1px] border-gray-200 hidden md:flex justify-between">
            <div class="w-[469px] h-[45px] flex justify-between items-center">
                <div>
                    <icons icon="logo"/>
                </div>
                <div class="pl-[32px] pr-[15px] py-[13px] flex relative">
                    <span class="absolute inset-y-0 left-[49px] flex items-center">
                       <icons icon="search"/>
                    </span>
                    <input class="w-[402px] h-[45px] pr-[15px] pl-[45px] py-[13px] text-base rounded-[16px] border-[1px] bg-main-bg text-cool-grey-500"
                           type="text"
                           placeholder="Search"
                    >
                </div>
            </div>
            <div class="flex items-center">
                <icons icon="bell"/>
                <icons class="ml-3 size-8 rounded-full" icon="Avatar"/>
            </div>
        </div>
        <div class="w-full justify-center flex">
            <div class="w-[250px] border-r-[1px] bg-white border-gray-200 hidden md:flex flex-wrap flex-col justify-between">
                <div>
                    <div class="px-3 py-4 border-b-[1px]">
                        <div class="w-[225px] h-[32px] mb-[22px] px-2 py-1 flex items-center justify-between">
                            <div class="flex items-center justify-between">
                                <div class="flex text-green-500">
                                    <icons icon="pie"/>
                                    <h2 class="ml-4 text-base font-interMedium">Overview</h2>
                                </div>
                            </div>
                        </div>
                        <div class="w-[225px] h-[32px] mb-[22px] px-2 py-1 flex items-center justify-between">
                            <div class="flex items-center justify-between">
                                <icons icon="doc"/>
                                <h2 class="ml-4 text-base font-interMedium text-color-900">Pages</h2>
                            </div>
                            <div>
                                <icons icon="arrowD"/>
                            </div>
                        </div>
                        <div class="w-[225px] h-[32px] px-2 py-1 flex items-center justify-between cursor-pointer"
                             :class="{'bg-grey-100': sales, 'rounded-[12px]': sales,'border-grey-100': sales}"
                             @click="salesClick()">
                            <div class="flex">
                                <icons icon="bag"/>
                                <h2 class="ml-4 text-base font-interMedium">Sales</h2>
                            </div>
                            <div>
                                <icons class="duration-200" :class="{'rotate-180': sales}" icon="arrowD"/>
                            </div>
                        </div>
                        <div v-if="sales"
                             class="ml-12">
                            <p class="py-[9px] text-base font-interMedium">Product List</p>
                            <p class="py-[9px] text-base font-interMedium">Billing</p>
                            <p class="py-[9px] text-base font-interMedium">Invoice</p>
                        </div>
                        <div class="w-[225px] h-[32px] my-[22px] px-2 py-1 flex items-center justify-between">
                            <div class="flex items-center">
                                <div>
                                    <icons icon="inbox"/>
                                </div>
                                <h2 class="ml-4 text-base font-interMedium">Messages</h2>
                            </div>
                            <div class="size-5 rounded-full bg-red-200 text-red-800 flex items-center align-center justify-evenly"
                            >1
                            </div>
                        </div>
                        <div class="w-[225px] h-[32px] mb-[22px] px-2 py-1 flex items-center justify-between">
                            <div class="flex items-center justify-between">
                                <icons icon="lock"/>
                                <h2 class="ml-4 text-base font-interMedium">Authentication</h2>
                            </div>
                            <div>
                                <icons icon="arrowD"/>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 py-4">
                        <button class="w-[225px] h-[24px] mb-[22px] px-2">
                            <div class="flex items-center">
                                <div>
                                    <icons icon="clList"/>
                                </div>
                                <h2 class="ml-4 text-base font-interMedium">Docs</h2>
                            </div>
                        </button>
                        <button class="w-[225px] h-[24px] mb-[22px] px-2">
                            <div class="flex items-center">
                                <div>
                                    <icons icon="collection"/>
                                </div>
                                <h2 class="ml-4 text-base font-interMedium">Components</h2>
                            </div>
                        </button>
                        <button class="w-[225px] h-[24px] mb-[22px] px-2">
                            <div class="flex items-center">
                                <div>
                                    <icons icon="support"/>
                                </div>
                                <h2 class="ml-4 text-base font-interMedium">Help</h2>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="mb-4 flex items-center justify-center">
                    <div>
                        <icons icon="adjustments"/>

                    </div>
                    <div class="ml-[22px]">
                        <icons icon="globe"/>
                    </div>
                    <div class="ml-[22px]">
                        <icons icon="cog"/>
                    </div>
                </div>
            </div>
            <div class="md:w-full p-4 bg-main-bg">
                <div class="md:p-8 p-2 rounded-[16px] bg-white shadow-md">
                    <div class="py-3.5 flex items-center">
                        <h2 class="text-xl font-interSemibold">Sales</h2>
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
                <div class="md:h-[448px] mt-4 bg-white md:flex">
                    <div class="md:w-[381px] p-6 shrink-0 rounded-[16px] bg-white shadow-md">
                        <div class="">
                            <h2 class="text-xl font-interSemibold">Latest Customers</h2>
                        </div>
                        <div class="md:h-[381px] h-[354px] mt-4">
                            <div class="py-[9px] flex justify-between items-center"
                                 :class="{'border-b-[1px]' : index !==  mainStore.clients.length -1}"
                                 v-for="(client, index) in mainStore.clients" :key="index"
                            >
                                <div class="flex justify-between items-center">
                                    <div>
                                        <icons class="size-8 rounded-full" :icon="client.img"/>
                                    </div>
                                    <div class="ml-2">
                                        <h2 class="font-black text-base font-interSemibold">{{ client.name }}</h2>
                                        <p class="text-grey-500 text-xs font-normal">{{ client.mail }}</p>
                                    </div>
                                </div>
                                <div class="font-black text-base font-interSemibold">${{client.sum}}</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div class="md:w-full md:ml-4 ml-0 p-6 md:mt-0 mt-4 rounded-[16px] bg-white shadow-md">
                        <div class=" h-[30]">
                            <h2 class="text-xl font-interSemibold">Top products</h2>
                        </div>
                        <div class="h-[354px] mt-4">
                            <div class="py-[9px] flex justify-between items-center"
                                 :class="{'border-b-[1px]' : index !==  mainStore.products.length -1}"
                                 v-for="(product, index) in mainStore.products" :key="index"
                            >
                                <div class="">
                                    <h2 class="font-black text-base font-interSemibold">{{ product.title }}</h2>
                                    <p class="text-gray-500 text-xs font-normal">{{ product.description }}</p>
                                </div>
                                <div>
                                    <p class="text-base font-interSemibold">{{ product.sales }}
                                        <span class="text-gray-600">sales
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 mt-4 rounded-[16px] bg-white shadow-md">
                    <div class="pb-4">
                        <h2 class="text-xl font-interSemibold">Transactions
                        </h2>
                        <p class="text-sm font-normal text-gray-500">This is a list of latest transactions.</p>
                    </div>
                    <div class="">
                        <table class="table-auto w-full">
                            <thead>
                            <tr class="bg-main-bg rounded-t-xl">
                                <th class="w-[269px] p-4 text-gray-500 text-start text-xs font-interSemibold border-b-[1px]">
                                    TRANSACTION
                                </th>
                                <th class="w-[357px] p-4 text-gray-500 text-start text-xs font-interSemibold border-b-[1px]">
                                    DATE
                                    &
                                    TIME
                                </th>
                                <th class="w-[405px] p-4 hidden md:table-cell text-gray-500 text-start text-xs font-interSemibold border-b-[1px]">
                                    AMOUNT
                                </th>
                                <th class="p-4 hidden md:table-cell text-gray-500 text-start text-xs font-interSemibold border-b-[1px]">
                                    STATUS
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="(transaction, index) in mainStore.transactions" :key="index"
                                    :class="{'bg-main-bg': index % 2 !== 0,'rounded-l-xl':index % 2 !== 0}">
                                <td class="p-4 text-start md:text-sm text-xs">
                                    <span class="text-gray-900 text-xs">Payment {{ transaction.paymentType }}</span>&nbsp;<span
                                        class="font-interSemibold">{{ transaction.payment }}</span>
                                </td>
                                <td class="p-4 text-start md:text-sm text-xs font-normal text-gray-500"
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
                <div class="mt-4 pt-12 px-8 md:px-8 md:py-12 bg-white rounded-[16px] md:flex justify-between">
                    <div class="md:w-[345px]"><p class="text-base text-cool-grey-500">© 2021 Themesberg, LLC. All rights
                        reserved.</p></div>
                    <div class="w-[168px] md:pt-0 pt-12 flex justify-between">
                        <div>
                            <icons icon="facebook"/>
                        </div>
                        <div class="ml-6">
                            <icons icon="twitter"/>
                        </div>
                        <div class="ml-6">
                            <icons icon="github"/>
                        </div>
                        <div class="ml-6">
                            <icons icon="dribble"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from '../components/icons/icons.vue';
    import paymentStatus from '../components/paymentStatus.vue';
    import {useMainStore} from "../stores/main";
    import {ref} from "vue";
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
        components: {icons, Line, paymentStatus},

        setup() {
            const mainStore = useMainStore()
            const sales = ref(true)
            const salesClick = () => {
                sales.value = !sales.value
            }
            return {
                mainStore,
                sales,
                salesClick
            }
        }
    }
</script>

<style scoped>
</style>
