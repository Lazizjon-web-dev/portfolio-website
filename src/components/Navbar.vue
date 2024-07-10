<template>
    <aside id="rightSideBar"
        class="bg-color8 h-fit w-full box-border fixed flex flex-row justify-around items-center top-0 right-0 left-0 md:pt-7 md:h-[100%] md:w-[8%] md:flex-col md:top-0 md:right-0 md:left-auto z-50">
        <ThemeSwitcher/>
        <NavbarButton 
            v-for="{ iconComponent, strTooltip } in buttons" 
            :key="strTooltip" 
            :Icon="iconComponent" 
            :tooltip="strTooltip"
        />
    </aside>
</template>
<script setup>
import ThemeSwitcher from "./ThemeSwitcher.vue";
import NavbarButton from "./NavbarButton.vue";
import HomeIcon from './icons/Navbar/IconHome.vue';
import ServicesIcon from './icons/Navbar/IconServices.vue';
import CVIcon from './icons/Navbar/IconCV.vue';
import PortfolioIcon from './icons/Navbar/IconPortfolio.vue';
import BlogIcon from './icons/Navbar/IconBlog.vue';
import ContactIcon from './icons/Navbar/IconContact.vue';

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