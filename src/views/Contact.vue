<template>
    <div class="w-full flex flex-col md:flex-row justify-between mx-4">
        <div class="box-border basis-3/5">
            <div class="inline-block m-5 mt-8 text-4xl font-bold capitalize text-center">send us your information</div>
            <form action="#" class="bg-color8 box-border mr-4 p-6 mb-0 h-full">
                <ContactInput v-for="(input,i) in inputForms" 
                    :key="i"
                    :label="input.label" 
                    :type="input.type"
                    :is-required="input.isRequired"
                    :is-text-area="input.isTextArea"
                    :value="input.value"
                />
                <button class="bg-primary text-lg font-bold border-none rounded-sm h-12 w-fit mt-2.5 mb-6 ml-5 py-2.5 px-8" type="submit" value="">SEND MESSAGE</button>
            </form>
        </div>
        <div class="basis-2/5">
            <div class="m-5 mt-8 text-4xl font-bold capitalize text-center"> my contact info</div>
            <div class="w-full h-full flex flex-col justify-between bg-gray-200">
                <ContactCard v-for="({icon,contactInfos},i) in ContactFields" :key="i" :icon="icon" :contact-infos="contactInfos"/>
            </div>
        </div>
    </div>
    <Map/>
</template>
<script setup>
// Import components
import Map from "../components/Map.vue";
import ContactInput from "../components/ContactInput.vue";
import ContactCard from "../components/ContactCard.vue";

// Import icons
import MailIcon from "../components/icons/Contact/MailIcon.vue";
import LocationIcon from "../components/icons/Contact/LocationIcon.vue";
import MobileIcon from "../components/icons/Contact/MobileIcon.vue";

const inputForms = [
    {
        label: 'your full name',
        type: 'text',
        isRequired: true,
        value: '',
    },
    {
        label: 'your email',
        type: 'email',
        isRequired: true,
        value: '',
    },
    {
        label: 'subject',
        type: 'text',
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
        contactInfos: {
            country: "Uzbekistan",
            city: "Navoi",
            street: 'Makhmud',
            },
    },
    {
        icon: MailIcon,
        contactInfos: {
            email: "azizjonovlazizjon64@gmail.com",
            skype: "@lazizjon",
            telegram: '@Lazizjon_Azizjonov',
            },
    },
    {
        icon: MobileIcon,
        contactInfos: {
            personal: "+998 91 308 2006",
            city: "Navoi",
            street: 'Makhmud',
            },
    }
];

</script>