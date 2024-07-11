<template>
    <div class="w-full flex flex-row justify-between">
        <div class="font-medium text-color5 capitalize">{{ name }}</div>
        <div class="text-color5">{{ percentage }}%</div>
    </div>
    <div class="border border-solid border-primary my-4 mx-0 p-0.5 w-full h-2.5 box-border rounded-full">
        <div class="bg-primary p-0 h-full m-0 border border-solid border-primary rounded-full" :style="{width: percentage + '%'}"></div>
    </div>
</template>
<script setup>
const { name,percentage } = defineProps({
    name: String,
    percentage: Number,
})
</script>