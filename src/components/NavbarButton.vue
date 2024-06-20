<template>
    <router-link :to="{name:strTooltip}" class="sideBarBtn group  hover:scale-105 bg-gray-100 box-border hover:bg-amber-400 border-none rounded-full relative h-12 w-12 my-3 md:m-3 p-4 transition-all focus:outline-none">
        <a href="index.html#home" class='flex justify-center items-center'>
            <div class="bg-gray-600 p-2 absolute text-white text-base tracking-wider font-medium translate-y-14 md:-translate-y-14  opacity-0 group-hover:opacity-100 pointer-events-none transition-all rounded-md focus:outline-none ">{{ strTooltip }}</div>
            <iconComponent  class=" fill-gray-500 group-hover:fill-gray-900 transition-all"/>
        </a>
    </router-link>
</template>
<script setup>
const { iconComponent, strTooltip } = defineProps({
    iconComponent: Object,
    strTooltip: String,
})
</script>