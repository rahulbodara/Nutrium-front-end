const { mdiAccount, mdiHistory, mdiCreditCard, mdiSecurity, mdiGift, mdiSettingsHelper, mdiCog, mdiWalletGiftcard, mdiViewGridPlus } = require("@mdi/js");

export const ProfileMenuData = [
    {
        id:'1',
        title: 'Your profile' ,
        icon : mdiAccount,
        route:'/admin/professionals/profile',
    },
    {
        id:'2',
        title: 'Activity history' ,
        icon : mdiHistory,
        route:'/admin/professionals/activities',
    },
    {
        id:'3',
        title: 'Manage subscription' ,
        icon : mdiCreditCard,
        route:'#',
    },
    {
        id:'4',
        title: 'Privacy and notifications' ,
        icon : mdiSecurity,
        route:'#',
    },
    {
        id:'5',
        title: 'Configurations and preferences' ,
        icon : mdiCog,
        route:'/admin/professionals/preferences',
    },
    {
        id:'6',
        title: 'App and services integrations' ,
        icon : mdiViewGridPlus,
        route:'/admin/professionals/integrations',
    },
    {
        id:'7',
        title: 'Invite and get discounts' ,
        icon : mdiWalletGiftcard,
        route:'/admin/professionals/friend',
    }    
]