<template>
    <a :href="link" class="group">
        <img class="bg-primary fill-color1 flex justify-center items-center w-10 h-10 rounded-full mx-1 p-1 transition-all  group-hover:bg-secondary group-hover:scale-110 " :src="icon"/>
    </a>
</template>
<script setup>
const {  link, icon } = defineProps({
    link: String,
    icon: String,
})
</script>
<style lang="">
    
</style>