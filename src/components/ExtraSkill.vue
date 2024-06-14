<template>
    <div class="extraSkills my-6 mx-auto">
        <img class="extraSkillsIcon mr-3" src="../assets/icons/CV/icons.svg"/>
        <span class="extraSkills">{{ name }}</span>
    </div>
</template>
<script setup>

const {name} = defineProps({
    name: String,
})

</script>