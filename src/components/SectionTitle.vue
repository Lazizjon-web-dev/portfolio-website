<template>
    <h2 class="w-full box-border mb-20 md:mb-[5%] text-color1 text-2xl text-center font-bold capitalize">{{ title }}</h2>
    <p class="w-full px-[10%] md:px-[22%] box-border mb-20 md:mb-[5%] text-color5 text-lg text-center">{{ description }}</p>
</template>
<script setup>
const { title, description } = defineProps({
    title: String,
    description: String,
});
</script>