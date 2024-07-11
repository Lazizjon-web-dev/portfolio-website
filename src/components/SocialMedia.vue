<template>
    <div class="flex flex-row flex-nowrap justify-around items-baseline px-2">
        <SocialMediaButton 
            v-for="{ name, link, icon } in socialMedias" 
            :key="name" 
            :link="link" 
            :icon="icon"
        />
    </div>
</template>
<script setup>
import SocialMediaButton from "./SocialMediaButton.vue";
const { socialMedias } = defineProps({
    socialMedias: Array,
});
</script>