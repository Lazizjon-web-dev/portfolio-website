<template>
    <SectionTitle :title="title" :description="description" />
    <div id="portfolioFilter" class="w-full my-4 flex flex-col items-center md:flex-row justify-around self-center">
        <div v-for="(category, i) in Categories" :key="i"
            class="text-lg font-normal hover:text-primary cursor-pointer">{{ category }}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 items-center">
        <a v-for="({ thumbnail, link }, i) in Portfolios" :key="i" :href="link">
            <img class=" h-80 w-full border-none m-0 bg-primary" :src="thumbnail" />
        </a>
    </div>
</template>
<script setup>
import SectionTitle from '../components/SectionTitle.vue';
const title = 'portfolio';
const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem doloribus atque vitae neque ea nihil aliquam quibusdam officiis, ex placeat natus illo! Eius assumenda cupiditate blanditiis nostrum voluptatibus neque!';

const Categories = [
    "All Categories", "Website development", "UI Design", "Web Application"
]

const Portfolios = [
    {
        thumbnail: '../src/assets/portfolio-thumbnails/add-portfolio.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio1.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio2.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio3.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio4.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio5.jpg',
        link: '#',
    }, {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio6.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio7.jpg',
        link: '#',
    },
    {
        thumbnail: '../src/assets/portfolio-thumbnails/portfolio8.jpg',
        link: '#',
    },

]

</script>