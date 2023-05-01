import React from 'react'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CategoryIcon from '@mui/icons-material/Category';
export const SidebarDataUser = [
    {
        title:"Sales",
        icon: <PointOfSaleIcon />,
        link:"/Sales"
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
    }



];
export default SidebarDataUser; 
