<template>
    <div class="bg-color7 p-5 pt-8" :class="{'shadow shadow-color1 pt-0 scale-105': isPopular}">
        <div v-if="isPopular" id="mostPopularDiv" class="relative top-0 left-0 right-0 text-base font-normal text-center bg-primary p-2 mb-1">Most Popular</div>
        <div class="text-2xl font-semibold text-center pb-2.5">{{ name }}</div>
        <div class="text-4xl font-semibold text-center pb-6">${{ price }}.00<span class="priceEnd text-sm font-normal text-color1">/Hour</span></div>
        <div class="text-center">{{ title }}</div>
        <div class="flex flex-col justify-center items-start">
            <div v-for="(isAvailable, facility, index) in facilities" :key="index" class="flex items-center">
                <IconCheck v-if="isAvailable" class="inline mx-4 fill-primary"/>
                <IconClose v-else class="inline mx-4 fill-primary"/>
                {{ facility }}
            </div>
        </div>
        <button class="orderBtn bg-white text-nowrap text-lg font-semibold text-center border-none rounded-full block my-12 mx-auto py-2.5 px-6 shadow-sm shadow-color1"
        :class="{'!bg-primary !shadow-md': isPopular}"
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