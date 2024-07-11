<template>
    <div class="w-full h-44 p-9 box-border flex flex-row justify-between bg-color8 capitalize border-b-2 border-color6">
        <div class="flex-1">
            <div class="my-5 mx-4 text-color1 text-xl font-semibold">{{ title }}</div>
            <div class="my-7 mx-4 text-color1 font-semibold">{{ role }} <span class="py-0.5 px-1.5 bg-primary text-color7">{{ startDate + "-" + endDate }}</span></div>
        </div>
        <div class="flex-[2]">
            <div class="text-color1 text-xl font-semibold my-2.5 mx-0">{{ certificate }}</div>
            <div class="mr-5 text-base font-normal text-color5">{{ description }}</div>
        </div>
    </div>
</template>
<script setup>
const { title, certificate, description, role, startDate, endDate } = defineProps({
    title: String, certificate: String, description: String, role: String, startDate: String, endDate: String
});
</script>