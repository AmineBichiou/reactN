import React from 'react'
import SidebarAdmin from './sidebar/SidebarAdmin'
import Header from './header/Header'

import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import { User } from 'feather-icons-react/build/IconComponents';
import { UserContext } from '../../context/UserContext';


const MainWrapper = experimentalStyled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));
const FullLayout = ({ children }) => {
  return (
    
   <MainWrapper>
    <UserContext.Provider value={"hello from context"}>
    <SidebarAdmin/>
    </UserContext.Provider>
    <Header/>
    <PageWrapper>
    <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
           
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          
        </Container>  
    </PageWrapper>
    </MainWrapper>
  )
}

export default FullLayout