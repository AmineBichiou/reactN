import { Grid } from "@mui/material";
import ProductsPerformance from "../components/dashboard/ProductsPerformance";
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
const ProductTable = () => {
  return (<div>
  
  <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>  
       
     
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductsPerformance/>
      </Grid>
    </Grid>
    </FullLayout>
      </ThemeProvider>
    </div>
  );
};

export default ProductTable;
