<template>
    <div class="flex flex-row bg-color8 box-border mb-20 mx-0 md:mt-0  md:mb-[5%] px-[4%] rounded-sm">
        <div class="flex flex-col w-full md:min-w-3/5 h-full mb-[6%] xl:mb-0 box-border pt-[6%] z-10 text-color1 font-bold">
            <h1 class="m-0 text-6xl">I'm {{ personalInfo.fullName }}</h1>
            <h1 class="m-0 mt-4 text-5xl capitalize"><span class="text-primary">{{ personalInfo.profession.split(' ')[0] }}</span> {{ personalInfo.profession.split(' ')[1] }}
            </h1>
            <p class="text-xl w-full text-color5 font-semibold m-0 my-12">{{ personalInfo.info }}</p>
            <button
                class="bg-primary max-w-fit text-base py-4 px-9 font-bold border-none rounded-md transition-shadow focus:outline-none visited:outline-none hover:shadow-[0_0_5px]  hover:shadow-gray-600">HIRE
                ME ➡</button>
        </div>
        <img class="w-full h-full box-content hidden xl:inline-block " :src="personalInfo.image">
    </div>
    <div class="px-3 pb-3 md:p-16 md:pr-6 bg-color8 box-border">
        <div class="flex flex-col md:flex-row justify-around">
            <img class="block self-center w-36 h-36 border-none rounded-full my-6 mx-6 " :src="personalInfo.icon" />
            <div class="flex flex-col justify-center items-center">
                <div class="text-color1 text-5xl font-bold text-center p-1">
                    {{ personalInfo.fullName }}
                </div>
                <div class="text-color4 text-3xl font-semibold text-center p-1 mb-4">
                    {{ personalInfo.profession }}
                </div>
                <SocialMedia :socialMedias="personalInfo.socialMedias" />
            </div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-color5 self-center m-4 " />
        <div class="mx-auto w-9/12 flex justify-start items-baseline my-3 text-color1">
            <div class="bg-primary px-0.5 py-1">Age:</div>
            <div class="flex-1 text-right">{{ personalInfo.age }}</div>
        </div>
        <div class="mx-auto w-9/12 flex justify-start items-baseline my-3 text-color1">
            <div class="bg-primary px-0.5 py-1">Freelance:</div>
            <div class="flex-1 text-right">
                <span v-if="personalInfo.isFreelanceAvailable" class="text-green-500">available</span>
                <span v-else class="text-red-600">unavailable</span>
            </div>
        </div>
        <div class="mx-auto w-9/12 flex justify-start items-baseline my-3 text-color1">
            <div class="bg-primary px-0.5 py-1">Address:</div>
            <div class="flex-1 text-right">{{ personalInfo.city }}, {{ personalInfo.country }}</div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-color5 self-center m-4 " />
        <div class="flex flex-row justify-around">
            <div class="w-1/3">
                <p class="mb-5 w-full text-color1 text-sm font-semibold">Language</p>
                <ProgressBar v-for="(percentage, language) of personalInfo.languages" :key="language" :name="language"
                    :percentage="percentage" />
            </div>
            <div  class="w-1/3">
                <p class="mb-5 w-full text-color1 text-sm font-semibold">Skills</p>
                <ProgressBar v-for="(percentage, skill) of personalInfo.skills" :key="skill" :name="skill"
                    :percentage="percentage" />
            </div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-color5 self-center m-4 " />
        <p class="w-full mb-5 ml-32 text-color1 text-sm font-semibold">Extra Skills</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-color1">
            <ExtraSkill v-for="skill in personalInfo.extraSkills" :key="skill" :name="skill" />
        </div>
        <button
            class="block my-2.5 mx-auto py-3.5 px-10 border-none bg-primary text-color1 uppercase text-base font-medium transition-all hover:text-primary hover:bg-color1 group">download
            cv
            <DownloadCVIcon
                class="inline-block -translate-y-0.5 fill-color1 group-hover:fill-primary my-0 mx-1 transition-colors" />
        </button>
    </div>


</template>
<script setup>
import ProgressBar from '../components/ProgressBar.vue';
import SocialMedia from '../components/SocialMedia.vue';
import ExtraSkill from '../components/ExtraSkill.vue'
import DownloadCVIcon from '../components/icons/CV/DownloadCVIcon.vue';
import store from '../store';
import { onMounted } from 'vue';

onMounted(() => {
    store.state.personalData = personalInfo;
})

const personalInfo = {
    icon: "https://axios.freewebhostmost.com/images/icons/icon.jpg",
    image: "https://axios.freewebhostmost.com/images/icons/image.png",
    fullName: "Lazizjon Azizjonov",
    profession: "Front-End developer",
    info: `A Vue.js frontend developer specializes in
                building user interfaces and single-page applications using Vue.js. They craft responsive, dynamic web
                pages, integrate APIs, and optimize performance. Proficiency in JavaScript, Vue CLI, Vue Router, and
                Vuex is essential.`,
    socialMedias: [
        {
            name:"github",
            link: "",
            icon: "https://axios.freewebhostmost.com/images/icons/github.svg#github",
        },
        {
            name:"youtube",
            link: "",
            icon: "https://axios.freewebhostmost.com/images/icons/youtube.svg",
        },
        {
            name:"linkedin",
            link: "",
            icon: "https://axios.freewebhostmost.com/images/icons/linkedin.svg",
        },
        {
            name:"dribbble",
            link: "",
            icon: "https://axios.freewebhostmost.com/images/icons/dribbble.svg",
        },
    ],
    age: 17,
    isFreelanceAvailable: true,
    street: 'Makhmud Tarobiy 110',
    city: 'Navoi',
    country: 'Uzbekistan',
    email: 'azizjonovlazizjon64@gmail.com',
    github: '@Lazizjon-web-dev',
    languages: {
        uzbek: 100,
        english: 90,
        russian: 70,
    },
    skills: {
        HTML: 100,
        CSS: 80,
        JS: 92,
    },
    extraSkills: ['Bootstrap', 'Sass', 'Git','Vue'],
}
</script>