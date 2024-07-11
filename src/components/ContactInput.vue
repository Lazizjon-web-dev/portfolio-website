<template>
    <div class="text-color1">
        <label class="block text-color5 text-xl font-bold capitalize">
            {{ label + (isRequired ? " (Required)" : "") }}
        </label>
        <input v-if="!isTextArea" class="w-11/12 mt-2.5 mb-6 p-4 bg-color7 border-none rounded-sm text-3xl" :type="type" :required="isRequired">
        <textarea v-else class=" min-h-52 w-11/12 mt-2.5 mb-6 p-4 bg-color7 border-none rounded-sm text-3xl font-sans resize-none"></textarea>
    </div>
</template>
<script setup>
const { label, type, isRequired, isTextArea, value } = defineProps({
    label: String,
    type: String,
    isRequired: Boolean,
    isTextArea: Boolean,
    value: String,
})
</script>
<style lang="scss">

</style>