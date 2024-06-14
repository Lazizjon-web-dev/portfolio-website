<template>
    <a :href="link" class="group">
        <iconComponent class="bg-amber-400 fill-gray-800 flex justify-center items-center w-7 h-7 rounded-full mx-1 p-1 transition-all  group-hover:bg-amber-500 group-hover:scale-110 "/>
    </a>
</template>
<script setup>
const {  link, iconComponent } = defineProps({
    link: String,
    iconComponent: Object,
})
</script>
<style lang="">
    
</style>