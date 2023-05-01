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

import LogoIcon from '../../logo/LogoIcon';
import { SidebarDataAdmin } from './SidebarDataAdmin';


const SidebarAdmin = () => {
  
  return (
    
    <Box p={1} className="boxa"  height="100%" backgroundColor="#2d68EA" width="18%" position='absolute' >
     <center><LogoIcon /></center>
      <Box mt={-7}>
        <ul className='SidebarList'>
{SidebarDataAdmin.map((val ,key) =>{
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

export default SidebarAdmin;