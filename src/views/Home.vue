<template>
    <div class="flex flex-row !w-full bg-white box-border mb-20 mx-0 md:mb-[5%] px-[4%] rounded-sm">
        <div class="flex flex-col min-w-3/5 h-full mb-[6%] xl:mb-0 box-border pt-[6%] z-10 font-bold">
            <h1 class="m-0 text-6xl">I'm {{ personalInfo.fullName }}</h1>
            <h1 class="m-0 mt-4 text-5xl capitalize"><span class="text-amber-400">{{ personalInfo.profession.split(' ')[0] }}</span> {{ personalInfo.profession.split(' ')[1] }}
            </h1>
            <p class="text-xl text-gray-500 font-semibold m-0 my-12">{{ personalInfo.info }}</p>
            <button
                class="bg-amber-400 max-w-fit text-base py-4 px-9 font-bold border-none rounded-md transition-shadow focus:outline-none visited:outline-none hover:shadow-[0_0_5px]  hover:shadow-gray-600">HIRE
                ME ➡</button>
        </div>
        <img class="w-full h-full box-content hidden xl:inline-block " :src="personalInfo.image">
    </div>
    <div class="w-full px-3 pb-3 md:p-16 md:pr-6 bg-white box-border">
        <div class="flex flex-col md:flex-row justify-around">
            <img class="block self-center w-36 h-36 border-none rounded-full my-6 mx-6 " :src="personalInfo.icon" />
            <div class="flex flex-col justify-center items-center">
                <div class="text-5xl font-bold text-center p-1">
                    {{ personalInfo.fullName }}
                </div>
                <div class="text-gray-600 text-3xl font-semibold text-center p-1 mb-4">
                    {{ personalInfo.profession }}
                </div>
                <SocialMedia :socialMediaLinks="personalInfo.socialMediaLinks" />
            </div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-gray-500 self-center m-4 " />
        <div class="w-full flex flex-row justify-between my-3 mx-0">
            <div class="bg-amber-400 px-0.5 py-1">Age:</div>
            <div class="flex-1 text-right">{{ personalInfo.age }}</div>
        </div>
        <div class="w-full flex flex-row justify-between my-3 mx-0">
            <div class="bg-amber-400 px-0.5 py-1">Freelance:</div>
            <div class="flex-1 text-right">
                <span v-if="personalInfo.isFreelanceAvailable" class="text-green-500">available</span>
                <span v-else class="text-red-600">unavailable</span>
            </div>
        </div>
        <div class="w-full flex flex-row justify-between my-3 mx-0">
            <div class="bg-amber-400 px-0.5 py-1">Address:</div>
            <div class="flex-1 text-right">{{ personalInfo.city }}, {{ personalInfo.country }}</div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-gray-500 self-center m-4 " />
        <div class="flex flex-row justify-around">
            <div class="w-1/3">
                <p class="text-sm font-semibold mb-5">Language</p>
                <ProgressBar v-for="(percentage, language) of personalInfo.languages" :key="language" :name="language"
                    :percentage="percentage" />
            </div>
            <div  class="w-1/3">
                <p class="text-sm font-semibold mb-5">Skills</p>
                <ProgressBar v-for="(percentage, skill) of personalInfo.skills" :key="skill" :name="skill"
                    :percentage="percentage" />
            </div>
        </div>
        <hr class="block mx-auto w-11/12 border border-solid border-gray-500 self-center m-4 " />
        <p class="text-sm font-semibold mb-5">Extra Skills</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ExtraSkill v-for="skill in personalInfo.extraSkills" :key="skill" :name="skill" />
        </div>
        <button
            class="block my-2.5 mx-auto py-3.5 px-10 border-none bg-amber-400 text-gray-800 uppercase text-base font-medium transition-all hover:text-amber-400 hover:bg-gray-800 group">download
            cv
            <DownloadCVIcon
                class="inline-block -translate-y-0.5 fill-gray-800 group-hover:fill-amber-400 my-0 mx-1 transition-colors" />
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
    icon: "./src/assets/icons/icon.jpg",
    image: "./src/assets/icons/image.png",
    fullName: "Lazizjon Azizjonov",
    profession: "Front-End developer",
    info: `A Vue.js frontend developer specializes in
                building user interfaces and single-page applications using Vue.js. They craft responsive, dynamic web
                pages, integrate APIs, and optimize performance. Proficiency in JavaScript, Vue CLI, Vue Router, and
                Vuex is essential.`,
    socialMediaLinks: {
        github: '',
        youtube: '',
        linkedin: '',
        dribbble: '',
    },
    age: 17,
    isFreelanceAvailable: true,
    street: 'Makhmud Tarobiy 110',
    city: 'Navoi',
    country: 'Uzbekistan',
    email: 'azizjonovlazizjon64@gmail.com',
    github: '@Lazizjon-web-dev',
    languages: {
        russian: 70,
        english: 80,
        uzbek: 100,
    },
    skills: {
        HTML: 100,
        CSS: 80,
        JS: 92,
    },
    extraSkills: ['Bootstrap', 'Sass', 'Git','Vue'],
}
</script>