<template>
    <SectionTitle :title="title" :description="description"/>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in Posts" 
            :key="post.id" 
            :id="post.id" 
            :thumbnail="post.thumbnail"
            :title="post.title" 
            :description="post.description" 
            :link="post.link"
        />
    </div>
</template>
<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import BlogCard from "../components/BlogCard.vue";

const title = 'blog';
const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione autem doloribus atque vitae neque ea nihil aliquam quibusdam officiis, ex placeat natus illo! Eius assumenda cupiditate blanditiis nostrum voluptatibus neque!'

const Posts = [
    {
        id: 1,
        thumbnail:'../src/assets/portfolio-thumbnails/responsive-website.jpg',
        title: 'How to make web templates',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque praesentium voluptate nam dolores aut.',
        link:'',
    },
    {
        id: 1,
        thumbnail:'../src/assets/portfolio-thumbnails/responsive-website.jpg',
        title: 'How to make web templates',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque praesentium voluptate nam dolores aut.',
        link:'',
    },
    {
        id: 1,
        thumbnail:'../src/assets/portfolio-thumbnails/responsive-website.jpg',
        title: 'How to make web templates',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque praesentium voluptate nam dolores aut.',
        link:'',
    },
    {
        id: 1,
        thumbnail:'../src/assets/portfolio-thumbnails/responsive-website.jpg',
        title: 'How to make web templates',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque praesentium voluptate nam dolores aut.',
        link:'',
    },
]

</script>