<template>
    <aside id="rightSideBar"
        class="h-[100%] w-[8%] fixed flex flex-col justify-around items-center top-0 right-0">
        <div></div>
        <NavbarButton v-for="{ iconComponent, strTooltip } in buttons" :key="strTooltip" :iconComponent="iconComponent" :strTooltip="strTooltip"/>
        <!-- <NavbarButton :iconComponent="HomeIcon" strTooltip="Home"/> -->
        <!-- <button class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#home" class='flex justify-center items-center'>
                <div id="HomeTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none ">Home</div>
                <img id="sidebarIcon1" 
                    class="w-5 h-5" 
                    src="../assets/icons/sidebar/Home.svg"/>
            </a>
        </button> -->
        <!-- <button id="services" class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#services" class='flex justify-center items-center'>
                <div id="servicesTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none ">Services</div>
                <img id="sidebarIcon2" class="w-5 h-5" src="../assets/icons/sidebar/Services.svg"/>
            </a>
        </button>
        <button id="CV" class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#education" class='flex justify-center items-center'>
                <div id="CVTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none ">CV</div>
                <img id="sidebarIcon3" class="w-5 h-5" src="../assets/icons/sidebar/CV.svg"/>
            </a>
        </button>
        <button id="Portfolio" class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#portfolio" class='flex justify-center items-center'>
                <div id="portfolioTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none ">Portfolio</div>
                <img id="sidebarIcon4" class="w-5 h-5" src="../assets/icons/sidebar/Portfolio.svg"/>
            </a>
        </button>
        <button id="Blog" class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#blog" class='flex justify-center items-center'>
                <div id="blogTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none ">Blog</div>
                <img id="sidebarIcon5" class="w-5 h-5" src="../assets/icons/sidebar/Blog.svg"/>
            </a>
        </button>
        <button id="contact" class="sideBarBtn border-none rounded-full relative h-12 w-12 m-3 p-4 transition-all focus:outline-none">
            <a href="index.html#contactForm" class='flex justify-center items-center'>
                <div id="contactTooltip" class="sidebarTooltip p-2 absolute text-base tracking-wider font-medium -translate-y-7 opacity-0 pointer-events-none transition-opacity rounded-md focus:outline-none " href="">Contact</div>
                <img id="sidebarIcon6" class="w-5 h-5" src="../assets/icons/sidebar/Contact.svg"/>
            </a>
        </button> -->
    </aside>
</template>
<script setup>
import NavbarButton from "./NavbarButton.vue";
import HomeIcon from './icons/HomeIcon.vue';
import ServicesIcon from './icons/ServicesIcon.vue';
import CVIcon from './icons/CVIcon.vue';
import PortfolioIcon from './icons/PortfolioIcon.vue';
import BlogIcon from './icons/BlogIcon.vue';
import ContactIcon from './icons/ContactIcon.vue';

const buttons = [
    {
        iconComponent: HomeIcon,
        strTooltip: 'Home',
    },
    {
        iconComponent: ServicesIcon,
        strTooltip: 'Services',
    },
    {
        iconComponent: CVIcon,
        strTooltip: 'CV',
    },
    {
        iconComponent: PortfolioIcon,
        strTooltip: 'Portfolio',
    },
    {
        iconComponent: BlogIcon,
        strTooltip: 'Blog',
    },
    {
        iconComponent: ContactIcon,
        strTooltip: 'Contact',
    },
]
</script>
<style lang="scss" scoped>
  

/* sidebar.css */
aside#rightSideBar{
    background-color:#fafafa;

    &>button:hover .sidebarTooltip{
        opacity: 1;
    }
}
.sidebarTooltip{
    //background-color:var(--color12);
    //background-color: #f00;
    color:var(--color3);

}
.sideBarBtn{
    display:block;

    //background-color: var(--color4);
    &:hover{
        //background-color: var(--color2);
    }
    &:focus{
        outline: none;
    }
}
</style>