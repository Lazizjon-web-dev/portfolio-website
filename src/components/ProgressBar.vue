<template>
    <div class="w-full flex flex-row justify-between">
        <div class="languages font-medium text-gray-500 capitalize">{{ name }}</div>
        <div class="languageProgres text-gray-500">{{ percentage }}%</div>
    </div>
    <div class="border border-solid border-amber-200 my-4 mx-0 p-0.5 w-full h-2.5 box-border rounded-full">
        <div class=" bg-amber-400 p-0 h-full m-0 border border-solid border-amber-400 rounded-full" :style="{width: percentage + '%'}"></div>
    </div>
</template>
<script setup>
const { name,percentage } = defineProps({
    name: String,
    percentage: Number,
})
</script>