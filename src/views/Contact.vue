<template>
    <div class="w-full flex flex-col md:flex-row justify-between ">
        <div class="box-border basis-3/5">
            <div class="inline-block m-5 mt-8 text-4xl font-bold capitalize text-center">send us your information</div>
            <form action="#" class="bg-white mr-4 p-6">
                <ContactInput v-for="(input,i) in inputForms" 
                    :key="i"
                    :label="input.label" 
                    :is-required="input.isRequired"
                    :is-text-area="input.isTextArea"
                    :value="input.value"
                />
                <button class="bg-amber-400 text-lg font-bold border-none rounded-sm h-12 w-fit mt-2.5 mb-6 ml-5 py-2.5 px-8" type="submit" value="">SEND MESSAGE</button>
            </form>
        </div>
        <div class="basis-2/5">
            <div class="m-5 mt-8 text-4xl font-bold capitalize text-center"> my contact info</div>
            <div class="w-full h-[879.2px] flex flex-col justify-between bg-gray-200">
                <ContactCard v-for="({icon,contactInfos},i) in ContactFields" :key="i" :icon="icon" :contact-infos="contactInfos"/>
            </div>
        </div>
    </div>
    <Map class="block w-full md:w-5/6 md:mx-auto  h-96 my-20 border-none"/>
</template>
<script setup>
import Map from "../components/Map.vue";
import ContactInput from "../components/ContactInput.vue";

import MailIcon from "../components/icons/Contact/MailIcon.vue";
import LocationIcon from "../components/icons/Contact/LocationIcon.vue";
import MobileIcon from "../components/icons/Contact/MobileIcon.vue";
import ContactCard from "../components/ContactCard.vue";

const inputForms = [
    {
        label: 'your full name',
        isRequired: true,
        value: '',
    },
    {
        label: 'your email',
        isRequired: true,
        value: '',
    },
    {
        label: 'subject',
        isRequired: false,
        value: '',
    },
    {
        label: 'your message',
        isRequired: false,
        isTextArea: true,
        value: '',
    },
]

const ContactFields = [
    {
        icon: LocationIcon,
        contactInfos: [
        {
                label: 'country',
                value: 'Uzbekistan',
            },
            {
                label: 'city',
                value: 'Navoi',
            },
            {
                label: 'street',
                value: 'Makhmud',
            },
        ],
    },
    {
        icon: MailIcon,
        contactInfos: [
            {
                label: 'country',
                value: 'Uzbekistan',
            },
            {
                label: 'city',
                value: 'Navoi',
            },
            {
                label: 'street',
                value: 'Makhmud',
            },
        ],
    },
    {
        icon: MobileIcon,
        contactInfos: [
        {
                label: 'country',
                value: 'Uzbekistan',
            },
            {
                label: 'city',
                value: 'Navoi',
            },
            {
                label: 'street',
                value: 'Makhmud',
            },
        ],
    }
]

</script>
<style lang="scss">

label{
    color:var(--color8);
    font-weight:700;
    font-size:20px;
}
#contactMessage{
    width:96%;
    min-height: 210px;
    resize: none;
    font-family: Roboto,sans-serif;
    padding: 10px;
}
.contactInformation{
    background-color: var(--color4) !important;
    flex:3;
}
.contactCard{
    min-height: 210px;
    padding:15px 25px;
    background-color: var(--color3);
}
.contactInformationIcon{
    display:block;
    margin:5px auto 30px;
    background-color:var(--color2);
    padding:5px;
    border-radius:50%;
}
.contactInfoPropertyDiv{
    margin:20px 5px;
    font-size: 18px;
    font-weight: 500;
}
</style>