<template>

    <div class="">
        <h2 class="text-xl font-interSemibold text-grey-900 dark:text-grey-200">{{ headerList }}</h2>
    </div>
    <div class="md:h-[381px] h-[354px] mt-4">
        <div class="py-[9px] flex justify-between items-center"
             :class="{'border-b-[1px]' : index !==  items.length -1}"
             v-for="(item, index) in items" :key="index"
        >
            <div class="flex justify-between items-center">
                <div v-if="item.img">
                    <icons class="size-8 rounded-full" :icon="item.img"/>
                </div>
                <div class="ml-2">
                    <h2 class="font-black text-base font-interSemibold text-grey-900 dark:text-grey-200"
                    >
                        {{ item.title }}</h2>
                    <p class="text-grey-500 text-xs font-normal">{{ item.subTitle }}</p>
                </div>
            </div>
            <div class="font-black text-base font-interSemibold text-grey-900 dark:text-grey-400"
            ><span v-if="headerList === 'Latest Customers'">$</span>{{ item.Quantity }}
                <span class="text-gray-600" v-if="headerList === 'Top products'"> sales</span>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from "./IconsComponent.vue";

    export default {
        name: "ListItem",
        props: ['headerList', 'items'],
        components: {icons},
    }
</script>

<style scoped>

</style>
