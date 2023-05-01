import React from 'react'
import { Grid } from "@mui/material";
import ProductsPerformance from "../components/dashboard/ProductsPerformance";
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
import StatBar from '../components/Statistique/StatBar';
import TopProduct from '../components/Statistique/TopProduct';
import TopCtagory from '../components/Statistique/TopCtagory';
const Stats = () => {
  return (
    <div>
  
  <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>  
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <StatBar />
      </Grid>

      <Grid item xs={12} lg={8}>
        <TopProduct/>
      </Grid>
      <Grid item xs={12} lg={4}>
       <TopCtagory />
      </Grid>

    </Grid>
    </FullLayout>
      </ThemeProvider>
    </div>
  );
  
}

export default Stats