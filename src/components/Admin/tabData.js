import { mdiHome,mdiFoodApple,mdiCalendar,mdiAccountMultiple,mdiMessageReplyText,mdiHeart,mdiEarth,mdiNutrition,mdiLibraryOutline,mdiClipboardText } from '@mdi/js';



export const tabTitle = [
    {
        id: 1,
        title: "Homepage",
        icon: mdiHome,
        feature:false,
        route: "/admin/professionals/home",
        tooltipId: "home"
    },
    {
        id: 2,
        title: "Calendar",
        icon: mdiCalendar,
        feature:false,
        route: "/admin/professionals/appointments",
        tooltipId: "calendar"
    },
    {
        id: 3,
        title: "Clients",
        icon: mdiAccountMultiple,
        feature:false,
        route: "/admin/professionals/patients",
        tooltipId: "clients"
    },
    {
        id: 4,
        title: "Messages",
        icon: mdiMessageReplyText,
        feature:true,
        route: "/admin/professionals/conversations",
        tooltipId: "messages"
    },
    {
        id: 5,
        title: "Follow-up",
        icon: mdiHeart,
        feature:true,
        route: "/admin/professionals/follow_up",
        tooltipId: "follow-up"
    },
    {
        id: 6,
        title: "Website and blog",
        icon: mdiEarth,
        feature:false,
        route: "/admin/professionals/website",
        tooltipId: "website-and-blog"
    },
    {
        id: 7,
        title: "Foods",
        icon: mdiFoodApple,
        feature:false,
        route: "/admin/professionals/foods",
        tooltipId: "foods"
    },
    {
        id: 8,
        title: "Recipes",
        icon: mdiNutrition,
        feature:false,
        route: "/admin/professionals/recipes",
        tooltipId: "recipes"
    },
    {
        id: 9,
        title: "Equivalents",
        icon: mdiClipboardText,
        feature:false,
        route: "/admin/professionals/food_lists",
        tooltipId: "equivalents"
    },
    {
        id: 10,
        title: "Templates",
        icon: mdiLibraryOutline,
        feature:false,
        route: "/admin/professionals/templates",
        tooltipId: "templates"
    },
]; 