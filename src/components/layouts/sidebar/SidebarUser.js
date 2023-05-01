import React from 'react'
import NextLink from 'next/link';
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SidebarDataUser from './SidebarDataUser';
import LogoIcon from '../../logo/LogoIcon';


const SidebarUser = () => {
  
  return (
    <Box p={2} height="100%" backgroundColor="#2d68EA">
      <LogoIcon />
      <Box mt={2}>
        <ul className='SidebarList'>
{SidebarDataUser.map((val ,key) =>{
    return(
        <li className='row' key={key} id={ window.location.pathname == val.link ? "active" : ""} onClick={()=> {window.location.pathname =val.link}}> <div id='icon'>{" "}{val.icon}</div>{" "}
        <div id='title'>{val.title}</div>
        
        </li>
    )
})}
</ul>
        </Box>
        </Box>

  )
}

export default SidebarUser;