<template>
    <div class="w-[84px] h-[22px] py-0.5 px-2.5 text-xs font-normal rounded-full flex justify-center items-center align-center text-xs font-normal"
         :class="{
        'bg-green-100': status === 'Completed','text-green-800': status === 'Completed',
         'bg-blue-100': status === 'In progress','text-blue-800': status === 'In progress',
         'bg-red-100': status === 'Cancelled','text-red-800': status === 'Cancelled'
    }"
    >{{ status }}
    </div>
</template>

<script>
    export default {
        name: "paymentStatus",
        props: ['status']
    }
</script>

<style scoped>

</style>
