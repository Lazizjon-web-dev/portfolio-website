<template>
    <div class="pt-20 px-2 pb-3 md:pt-4 box-border">
        <SectionTitle :title="serviceTitle" :description="serviceDescription"/>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 w-full mb-10">
            <Service v-for="{ title, description, icon, orderBtn } in Services" :key="title" :title="title"
                :description="description" :icon="icon" :btn="orderBtn" />
        </div>
        <SectionTitle :title="plansTitle" :description="plansDescription"/>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-4 align-items-center w-full mb-10">
            <PricePlan v-for="plan in PricePlans" :key="plan.name" :name="plan.name" :price="plan.price" :title="plan.title"
                :isPopular="plan.isPopular" :facilities="plan.facilities" :anim="plan.animationClasses" />
        </div>
        <SectionTitle :title="recommendationTitle" :description="recommendationDescription"/>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-4 items-center w-full mb-20">
            <Recommendation v-for="({ rating, title, description, author }, index) in Recommendations" :key="index"
                :rating="rating" :title="title" :description="description" :author="author" />
        </div>
    </div>
</template>
<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import IconCoding from "../components/icons/Services/IconCoding.vue";
import IconGameDev from "../components/icons/Services/IconGameDev.vue";
import IconIllustration from "../components/icons/Services/IconIllustration.vue";
import IconMicrophone from "../components/icons/Services/IconMicrophone.vue";
import IconPhotographer from "../components/icons/Services/IconPhotographer.vue";
import Service from "../components/Service.vue";

import PricePlan from "../components/PricePlan.vue";
import Recommendation from "../components/Recommendation.vue";

const serviceTitle = 'my services';
const serviceDescription = 'Discover Our Services: Explore Innovative Solutions and Expertise Tailored Just for You! Our Commitment to Excellence Ensures Optimal Results and Satisfaction Every Time.';
const plansTitle = 'price plans';
const plansDescription = `Discover our Affordable Price Plans: Choose from Various Options Tailored to Fit Your Needs Perfectly. Find the Ideal Solution that Suits You Best!`;
const recommendationTitle = 'recommendations';
const recommendationDescription = `Discover why our clients love working
            with us. From exceptional front-end development to unparalleled customer service, our clients' feedback speaks
            volumes. We pride ourselves on delivering high-quality, user-friendly websites that meet and exceed
            expectations. Read on to see how we've helped businesses like yours achieve their goals and improve their online
            presence. Your satisfaction is our top priority, and these reviews are a testament to our commitment and
            expertise.`;

const Services = [
    {
        title: 'Web development',
        description: 'blog, website, web application',
        icon: IconCoding,//"https://axios.freewebhostmost.com/images/icons/coding.svg",
    },
    {
        title: 'UX/UI design',
        description: 'mobile app, website design',
        icon: IconIllustration,//"https://axios.freewebhostmost.com/images/icons/illustration.svg",
    },
    {
        title: 'Sound design',
        description: 'voice over, beat making',
        icon: IconMicrophone,//"https://axios.freewebhostmost.com/images/icons/microphone.svg",
    },
    {
        title: 'Game design',
        description: 'character design, props & objects',
        icon: IconGameDev,//"https://axios.freewebhostmost.com/images/icons/game-development.svg",
    },
    {
        title: 'Photography',
        description: 'portrait, product photography',
        icon: IconPhotographer,//"https://axios.freewebhostmost.com/images/icons/photographer.svg",
    },
    {
        title: 'Advertising',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nisi dolore eaque ratione qui corporis placeat debitis.',
        orderBtn: 'https://'
    },
]

const PricePlans = [
    {
        name: 'Silver',
        price: 0,
        title: 'For Most Businesses That want to optimize web queries',
        isPopular: false,
        facilities: {
            "UI design": true,
            "Web development": true,
            "Logo design": false,
            "Seo Optimaziation": false,
            "WordPress Integration": false,
            "5 Websites": false,
            "Unlimited User": false,
            "20GB Bandwith": false,
        },
        animationClasses: 'animate-fade-right animate-once animate-ease-in',
    },
    {
        name: 'Gold',
        price: 50,
        title: 'For Most Businesses That want to optimize web queries',
        isPopular: true,
        facilities: {
            "UI design": true,
            "Web development": true,
            "Logo design": true,
            "Seo Optimaziation": true,
            "WordPress Integration": false,
            "5 Websites": false,
            "Unlimited User": false,
            "20GB Bandwith": false,
        },
        animationClasses: 'animate-fade-up animate-once animate-ease-in',
    },
    {
        name: 'Dimond',
        price: 80,
        title: 'For Most Businesses That want to optimize web queries',
        isPopular: false,
        facilities: {
            "UI design": true,
            "Web development": true,
            "Logo design": true,
            "Seo Optimaziation": true,
            "WordPress Integration": true,
            "5 Websites": true,
            "Unlimited User": true,
            "20GB Bandwith": true,
        },
        animationClasses: 'animate-fade-left animate-once animate-ease-in',
    }
]

let options = {
    currentPage: 0,
}

const Recommendations = [
    {
        rating: 5,
        title: "Exceptional Service",
        description: "Working with Lazizjon was fantastic. Top-notch front-end development, highly recommend!",
        author: {
            name: "John Anderson",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/JohnAnderson.png",
            profession: "Marketing Manager"
        }
    },
    {
        rating: 5,
        title: "Outstanding Skills",
        description: "Lazizjon transformed our website beautifully. Great user experience improvements!",
        author: {
            name: "Sarah Martinez",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/SarahMartinez.png",
            profession: "CEO at Creative Solutions"
        }
    },
    /* {
        rating: 5,
        title: "Highly Professional",
        description: "Lazizjon's expertise in front-end development is evident in their high-quality work.",
        author: {
            name: "Michael Brown",
            icon:"https://axios.freewebhostmost.com/images/icons/recommendation/MichaelBrown.png",
            profession: "Project Manager at Tech Innovations"
        }
    },
    {
        rating: 5,
        title: "Top-Notch Development",
        description: "Lazizjon enhanced our site's usability and aesthetics significantly. Very satisfied!",
        author: {
            name: "Emily Johnson",
            icon:"https://axios.freewebhostmost.com/images/icons/recommendation/EmilyJohnson.png",
            profession: "Founder of Eco-Friendly Living"
        }
    }, */
    {
        rating: 5,
        title: "Reliable Developer",
        description: "Lazizjon is reliable and talented, delivering high-quality work consistently.",
        author: {
            name: "David Lee",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/DavidLee.png",
            profession: "CTO at Smart Solutions Inc."
        }
    },
    {
        rating: 5,
        title: "Attention to Detail",
        description: "Lazizjon's attention to detail is remarkable. Final product was stunning and functional.",
        author: {
            name: "Jessica Roberts",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/JessicaRoberts.png",
            profession: "Product Manager at HealthTech"
        }
    },
    {
        rating: 5,
        title: "Excellent Services",
        description: "Lazizjon redesigned our site beautifully. Fast, user-friendly, and great feedback from clients!",
        author: {
            name: "Daniel Wilson",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/DanielWilson.png",
            profession: "Owner of Wilson & Co."
        }
    },
    {
        rating: 5,
        title: "Fantastic Work",
        description: "Lazizjon provided excellent front-end development. Our website looks amazing and functions perfectly.",
        author: {
            name: "Aisha Khan",
            icon: "https://axios.freewebhostmost.com/images/icons/recommendation/AishaKhan.png",
            profession: "Owner of Halal Delights"
        }
    }
]


</script>
<style lang="scss"></style>