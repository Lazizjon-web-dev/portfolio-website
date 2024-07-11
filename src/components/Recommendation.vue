<template>
  <div class="h-80 min-w-80 bg-color8 p-7 shadow transition-all cursor-pointer duration-500 hover:scale-105 hover:shadow-xl">
    <div>
        <IconStar v-for="(e, i) in new Array(rating)" :key='i' class="fill-primary inline-block my-2.5 mx-0.5"/>
    </div>
    <div class="mt-2.5 text-color1 text-xl font-semibold">{{ title }}</div>
    <div class="my-7 mx-1 text-color5 text-base">
      {{ description }}
    </div>
    <div class="flex flex-row">
      <div class="flex-1">
        <img class="block h-20 w-20 my-2.5 mx-auto rounded-full" :src="author.icon"/>
      </div>
      <div class="flex-[2]">
          <div class="mt-6 text-color1 text-lg font-medium">{{ author.name}}</div>
        <div class="mt-3 text-color5">{{ author.profession}}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconStar from './icons/Services/IconStar.vue';
const {rating, title, description, author } = defineProps({
    rating: Number,
    title: String,
    description: String,
    author: Object,
})
</script>