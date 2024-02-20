<template>
    <div @click="openMenu(elem)"
         v-for="(elem, index) in menu" :key="index">
        <div class="mx-3 mb-[22px]">
            <div :class="{'mb-1.5': elemId === elem.id && elem.subMenu.length > 0}"
                 v-if="elem.rowType !== 'separator'">
                <div class="py-1 px-2 flex items-center justify-between cursor-pointer"
                     :class="{'bg-grey-100': elemId === elem.id,'dark:bg-grey-900': elemId === elem.id,'rounded-[12px]': elemId === elem.id,'border-grey-100': elemId === elem.id}">
                    <button class="flex items-center justify-between">
                        <icons :icon="elem.icon"/>
                        <h2 class="ml-4 text-base font-interMedium text-color-900 dark:text-grey-200"
                            :class="{'text-green-500': elem.id === 1}"
                        >{{elem.name}}</h2>
                    </button>
                    <div>
                        <icons class="duration-200" :class="{'rotate-180': elemId === elem.id}"
                               v-if="elem.rowType === 'default'" icon="arrowD"/>
                        <div class="size-5 rounded-full bg-red-200 text-red-800 flex items-center align-center justify-evenly"
                             v-if="elem.rowType === 'mess'"
                        >1
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="elemId === 3" class="ml-[41px]"
                 v-for="(sub, index) in elem.subMenu" :key="index">
                <div class="py-2.5"
                     :class="{'mb-1.5' : index !==  elem.subMenu.length -1}">
                    <router-link class="text-base font-interMedium dark:text-grey-400" to="">{{ sub }}</router-link>
                </div>
            </div>
        </div>


        <div class="my-0.5 mb-[22px] border-b-[1px]" v-if="elem.rowType === 'separator'"></div>
    </div>
</template>

<script>
    import Icons from "./IconsComponent.vue";
    import {ref} from "vue";

    export default {
        name: "ElementMenu",
        components: {Icons},
        props: ['menu'],
        setup() {
            const elemId = ref(null)
            const openMenu = (elem) => {
                elemId.value = null
                elemId.value = elemId.value === null && elem.view ? elem.id : null
            }
            return {
                elemId,
                openMenu
            }
        }
    }
</script>

<style scoped>

</style>
