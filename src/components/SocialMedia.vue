<template>
    <div class="flex flex-row flex-nowrap justify-around items-baseline px-2">
        
        <SocialMediaButton 
            v-for="{ name, link, icon } in socialMedias" 
            :key="name" 
            :link="link" 
            :iconComponent="icon"
        /> 

        <!-- <GitHubIcon></GitHubIcon>
        <YouTubeIcon></YouTubeIcon>
        <LinkedInIcon></LinkedInIcon>
        <DribbbleIcon></DribbbleIcon> -->
        <!-- <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-facebook.svg">
        <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-instagram.svg">
        <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-twitter.svg">
        <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-linkedin.svg">
        <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-Youtube.svg">
        <img class="bg-amber-400 rounded-full p-1" src="../assets/icons/contact/Icons-dribbble.svg"> -->
    </div>
</template>
<script setup>
import SocialMediaButton from "./SocialMediaButton.vue";
import GitHubIcon from "./icons/SocialMedia/GitHubIcon.vue";
import YouTubeIcon from "./icons/SocialMedia/YouTubeIcon.vue";
import LinkedInIcon from "./icons/SocialMedia/LinkedInIcon.vue";
import DribbbleIcon from "./icons/SocialMedia/DribbbleIcon.vue";

const { socialMediaLinks } = defineProps({
    socialMediaLinks: Object,
})

const socialMedias = [
    {
        name:"github",
        link: socialMediaLinks.github,
        icon: GitHubIcon,
    },
    {
        name:"youtube",
        link: socialMediaLinks.youtube,
        icon: YouTubeIcon,
    },
    {
        name:"linkedin",
        link: socialMediaLinks.linkedin,
        icon: LinkedInIcon,
    },
    {
        name:"dribbble",
        link: socialMediaLinks.dribbble,
        icon: DribbbleIcon,
    },

]

</script>