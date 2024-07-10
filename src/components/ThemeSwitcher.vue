<script setup>
import IconThemeSwitcher from './icons/IconThemeSwitcher.vue';
const toggleTheme = () => document.documentElement.classList.toggle('dark');

</script>
<template>
    <button class='flex justify-center items-center group bg-gray-100 box-border hover:bg-primary border-none rounded-full relative h-12 w-12 my-3 md:m-3 transition-all duration-300 focus:outline-none' @click="toggleTheme()">
            <IconThemeSwitcher class="fill-primary group-hover:fill-color1 transition-all duration-300"/>
    </button>
</template>