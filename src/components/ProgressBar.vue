<template>
    <div class="w-full flex flex-row justify-between">
        <div class="languages font-medium text-gray-500 capitalize">{{ name }}</div>
        <div class="languageProgres text-gray-500">{{ percentage }}%</div>
    </div>
    <div class="border border-solid border-amber-200 my-4 mx-0 p-0.5 w-full box-border rounded-sm">
        <div :class="`w-[${ percentage }%] bg-amber-400 m-0 p-0 border border-solid border-amber-400`"></div>
    </div>
</template>
<script setup>
const { name,percentage } = defineProps({
    name: String,
    percentage: Number,
})
</script>