<template>
    <div class="bg-color8 mx-1 p-5 pt-8 transition-transform duration-300 shadow-color1 hover:scale-105 hover:shadow-lg" :class="{'shadow shadow-color1 pt-0 scale-105 hover:scale-110': isPopular}">
        <div v-if="isPopular" class="relative top-0 left-0 right-0 text-base font-normal text-center bg-primary p-2 mb-1">Most Popular</div>
        <div class="text-color1 text-2xl font-semibold text-center pb-2.5">{{ name }}</div>
        <div class="text-color1 text-4xl font-semibold text-center pb-6">${{ price }}.00<span class="text-sm font-normal text-color2">/Hour</span></div>
        <div class="text-color1 text-center">{{ title }}</div>
        <div class="flex flex-col justify-center items-start">
            <div v-for="(isAvailable, facility, index) in facilities" :key="index" class="flex items-center text-color2">
                <IconCheck v-if="isAvailable" class="inline mx-4 fill-primary"/>
                <IconClose v-else class="inline mx-4 fill-primary"/>
                {{ facility }}
            </div>
        </div>
        <button class="bg-color8 text-color1 text-nowrap text-lg font-semibold text-center border-none rounded-full block my-12 mx-auto py-2.5 px-6 shadow shadow-color1 transition-all hover:bg-primary"
        :class="{'!bg-secondary hover:!bg-primary': isPopular}"
        >ORDER NOW</button>
    </div>
</template>
<script setup>
import IconCheck from './icons/Services/IconCheck.vue';
import IconClose from './icons/Services/IconClose.vue';
const { name, price, title, isPopular, facilities, anim } = defineProps({
    name: String,
    price: Number,
    title: String,
    isPopular: Boolean,
    facilities: Object,
    anim:String,
})
</script>