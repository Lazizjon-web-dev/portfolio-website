<template>
    <aside id="rightSideBar"
        class="h-fit w-full fixed flex flex-row justify-around items-center top-0 right-0 left-0 md:pt-7 md:h-[100%] md:w-[8%] md:flex-col md:top-0 md:right-0 md:left-auto z-50">
        <NavbarButton 
            v-for="{ iconComponent, strTooltip } in buttons" 
            :key="strTooltip" 
            :iconComponent="iconComponent" 
            :strTooltip="strTooltip"
        />
    </aside>
</template>
<script setup>
import NavbarButton from "./NavbarButton.vue";
import HomeIcon from './icons/Navbar/HomeIcon.vue';
import ServicesIcon from './icons/Navbar/ServicesIcon.vue';
import CVIcon from './icons/Navbar/CVIcon.vue';
import PortfolioIcon from './icons/Navbar/PortfolioIcon.vue';
import BlogIcon from './icons/Navbar/BlogIcon.vue';
import ContactIcon from './icons/Navbar/ContactIcon.vue';

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