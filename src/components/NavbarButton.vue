<template>
    <router-link :to="{name:tooltip}" class="flex justify-center items-center h-12 w-12 box-border border-none rounded-full my-3 md:m-3 p-auto relative bg-gray-100 transition-all group hover:bg-primary hover:scale-105 focus:outline-none">
        <div class="bg-gray-600 p-2 absolute text-color7 text-base tracking-wider font-medium translate-y-14 md:-translate-y-14  opacity-0 pointer-events-none transition-all rounded-md group-hover:opacity-100 focus:outline-none ">{{ tooltip }}</div>
        <Icon class=" fill-color5 group-hover:fill-color1 transition-all"/>
    </router-link>
</template>
<script setup>
const { Icon, tooltip } = defineProps({
    Icon: Object,
    tooltip: String,
})
</script>