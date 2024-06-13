<template>
    <router-link :to="{name:strTooltip}" class="sideBarBtn group  hover:scale-105 bg-gray-100 box-border hover:bg-amber-400 border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
        <a href="index.html#home" class='flex justify-center items-center'>
            <div id="HomeTooltip" class="sidebarTooltip  bg-gray-600 p-2 absolute text-white text-base tracking-wider font-medium -translate-y-14  opacity-0 group-hover:opacity-100 pointer-events-none transition-all rounded-md focus:outline-none ">{{ strTooltip }}</div>
            <iconComponent  class=" fill-gray-500 group-hover:fill-gray-900 transition-all" />
            <!-- <img id="sidebarIcon1 fill-blue-500 hover:fill-red-900" 
                class=" h-5" 
                src="../assets/icons/sidebar/Home.svg"/> -->
        </a>
    </router-link>
</template>
<script setup>
const { iconComponent, strTooltip } = defineProps({
    iconComponent: Object,
    strTooltip: String,
})
</script>
<style lang="scss" scoped>

/* button:hover{
    background-color: #FFB400 !important;
} */
</style>