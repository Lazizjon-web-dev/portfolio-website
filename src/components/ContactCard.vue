<template lang="">
    <div class="contactCard bg-color8 py-4 px-6">
        <icon class="mt-1 mx-auto mb-7 p-1.5 rounded-full bg-primary box-content"/>
        <div v-for="(value,property) of contactInfos" class="flex flex-row w-full justify-between my-5 mx1.1 text-color1 text-lg font-medium ">
            <div class="capitalize">{{property}}: </div>
            <div class="">{{value}}</div>
        </div>
    </div>
</template>
<script setup>
const {icon, contactInfos} = defineProps({
    icon: Object,
    contactInfos: Object,
});
</script>
<style lang="css">
    
.contactCard{
    min-height: 210px;
}
</style>