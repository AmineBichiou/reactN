import { Grid } from "@mui/material";
import ProductPerfomance from "../components/dashboard/SalesPerfomance";
import SalesPerfomance from "../components/dashboard/SalesPerfomance";
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
const Tables = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesPerfomance />
      </Grid>
    </Grid>
    </FullLayout>
      </ThemeProvider>
  );
};

export default Tables;
