import { Grid } from "@mui/material";
import UsersPerformance from "../components/dashboard/UsersPerformance";
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from '../theme/theme';
const UserTable = () => {
  return (<div>
     <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <UsersPerformance/>
      </Grid>
    </Grid>
    </FullLayout>
      </ThemeProvider>
    
    </div>
  );
};

export default UserTable;
