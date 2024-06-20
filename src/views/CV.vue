<template>
    <SectionTitle :title="educationTitle" :description="educationDescription"/>
    <div class="flex flex-col justify-between bg-white">
        <CVComponent v-for="(edu,i) in Educations"
            :key="i"
            :title="edu.title" 
            :certificate="edu.certificate" 
            :description="edu.description" 
            :role="edu.role" 
            :startDate="edu.startDate" 
            :endDate="edu.endDate"
        />
    </div>
    <SectionTitle :title="workTitle" :description="workDescription"/>
    <div class="w-full flex flex-col justify-between bg-white mb-20">
        <CVComponent v-for="(exp,i) in Experiences"
            :key="i"
            :title="exp.title" 
            :certificate="exp.certificate" 
            :description="exp.description" 
            :role="exp.role" 
            :startDate="exp.startDate" 
            :endDate="exp.endDate"
        />
    </div>
</template>
<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import CVComponent from "../components/CVComponent.vue";

const educationTitle = 'education';
const educationDescription = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem doloribus atque vitae neque ea nihil aliquam quibusdam officiis, ex placeat natus illo! Eius assumenda cupiditate blanditiis nostrum voluptatibus neque!';
const workTitle = 'work history';
const workDescription = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem doloribus atque vitae neque ea nihil aliquam quibusdam officiis, ex placeat natus illo! Eius assumenda cupiditate blanditiis nostrum voluptatibus neque!';

const Educations = [
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
];

const Experiences = [
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
    {
        title:'programming courses',
        certificate:'certificate of web training',
        description:'Eos laudantium necessitatibus molestias magnam, sequi aliquam reiciendis fuga quod accusantium. Deleniti, sed alias ipsam perferendis maiores ipsum! Sapiente non nemo tempora nulla iusto voluptatibus. Nam nisi ipsa dolor incidunt.',
        role:'student',
        startDate:'may 2023',
        endDate:'may 2023',
    },
]

</script>
<style lang="">
    
</style>