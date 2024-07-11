<script setup>
import IconExtra from './icons/IconExtra.vue'

const {name} = defineProps({
    name: String,
});
</script>
<template>
    <div class="my-6 mx-auto flex items-baseline">
        <IconExtra class="mr-3 stroke-primary" />
        <span>{{ name }}</span>
    </div>
</template>