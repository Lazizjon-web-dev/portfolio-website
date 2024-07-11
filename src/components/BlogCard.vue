<template>
    <div class="flex-1 my-2.5 mx-5 rounded-xl bg-color8 capitalize">
        <img :src="thumbnail" class="block w-full h-80 rounded-t-xl">
        <h3 class="text my-4 mx-5 text-xl text-color2">{{ title }}</h3>
        <p class="my-4 mx-5 text-color5">{{ description }}</p>
        <p class="my-4 mx-5"><a class="text-primary font-medium no-underline hover:underline" :href="link">learn more &gt;</a></p>
    </div>
</template>
<script setup>

const { id, thumbnail, title, description, link } = defineProps({
    id: Number,
    thumbnail: String,
    title: String,
    description: String,
    link: String,
});

</script>