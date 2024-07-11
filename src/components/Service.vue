<template>
    <div class="inline-block box-border shadow rounded-sm bg-color8 hover:scale-105 hover:shadow-xl  transition-all duration-500">
        <icon v-if="typeof icon == 'object' && !btn" class="block my-4 mx-auto fill-primary"/>
        <img v-else-if="!btn" class="block my-4 mx-auto" :src="icon"/>
        <p class="w-full text-center text-lg font-medium my-5 mx-auto text-color1 capitalize">{{ title }}</p>
        <p class="w-full text-center text-base my-5 mx-auto text-color5 capitalize leading-5">{{ description }}</p>
        <a v-if="!!btn" class="block my-4 text-primary text-base text-center font-normal no-underline hover:underline hover:font-normal" :href="btn" >ORDER NOW ></a>
    </div>
</template>
<script setup>
    const {title, description, icon, btn} = defineProps({
        title: String,
        description: String,
        icon: String || Object,
        btn: String,
    })
</script>