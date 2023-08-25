const { mdiAccount, mdiHistory, mdiCreditCard, mdiSecurity, mdiGift, mdiSettingsHelper, mdiCog, mdiWalletGiftcard, mdiViewGridPlus } = require("@mdi/js");

export const FollowUpMenuData = [
    {
        id:'1',
        title: 'Mark as completed' ,
        icon : mdiAccount,
        route:'profile',
    },
    {
        id:'2',
        title: 'Check profile' ,
        icon : mdiHistory,
        route:'#',
    },
    {
        id:'3',
        title: 'Edit appointment date' ,
        icon : mdiCreditCard,
        route:'#',
    },
    {
        id:'4',
        title: 'Cancel appointment' ,
        icon : mdiSecurity,
        route:'#',
    }
]