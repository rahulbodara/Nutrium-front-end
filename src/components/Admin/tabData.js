import { mdiHome,mdiFoodApple,mdiCalendar,mdiAccountMultiple,mdiMessageReplyText,mdiHeart,mdiEarth,mdiNutrition,mdiLibraryOutline,mdiClipboardText } from '@mdi/js';



export const tabTitle = [
    {
        id: 1,
        title: "Homepage",
        icon: mdiHome,
        feature:false,
        route: "/admin/professionals/home"
    },
    {
        id: 2,
        title: "Calendar",
        icon: mdiCalendar,
        feature:false,
        route: "/admin/professionals/appointments"
    },
    {
        id: 3,
        title: "Clients",
        icon: mdiAccountMultiple,
        feature:false,
        route: "/admin/professionals/patients"
    },
    {
        id: 4,
        title: "Messages",
        icon: mdiMessageReplyText,
        feature:true,
        route: "/admin/professionals/conversations"
    },
    {
        id: 5,
        title: "Follow-up",
        icon: mdiHeart,
        feature:true,
        route: "/admin/professionals/follow_up"
    },
    {
        id: 6,
        title: "Website and blog",
        icon: mdiEarth,
        feature:false,
        route: "/admin/professionals/website"
    },
    {
        id: 7,
        title: "Foods",
        icon: mdiFoodApple,
        feature:false,
        route: "foods"
    },
    {
        id: 8,
        title: "Recipes",
        icon: mdiNutrition,
        feature:false,
        route: "recipes"
    },
    {
        id: 9,
        title: "Equivalents",
        icon: mdiClipboardText,
        feature:false,
        route: "food_lists"
    },
    {
        id: 10,
        title: "Templates",
        icon: mdiLibraryOutline,
        feature:false,
        route: "templates"
    },
]; 