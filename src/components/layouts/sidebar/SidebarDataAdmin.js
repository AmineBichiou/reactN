import React from 'react'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CategoryIcon from '@mui/icons-material/Category';
export const SidebarDataAdmin = [
    {
        title:"Sales",
        icon: <PointOfSaleIcon />,
        link:"/"
    },

    {
        title:"Userinfo",
        icon: <ManageAccountsOutlinedIcon />,
        link:"/User"
    },

    {
        title:"Products",
        icon: <Inventory2OutlinedIcon />,
        link:"/Product"
    },

    {
        title:"Categories",
        icon: <CategoryIcon />,
        link:"/Categories"
    },
    {
        title:"Manage",
        icon: <AnalyticsOutlinedIcon />,
        link:"/Manage"
    }

];
export default SidebarDataAdmin; 
