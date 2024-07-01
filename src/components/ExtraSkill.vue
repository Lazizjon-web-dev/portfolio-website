<template>
    <div class="my-6 mx-auto flex">
        <img class="mr-3" src="https://axios.freewebhostmost.com/images/icons/extra.svg"/>
        <span>{{ name }}</span>
    </div>
</template>
<script setup>

const {name} = defineProps({
    name: String,
})

</script>