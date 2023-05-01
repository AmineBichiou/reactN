import React from "react";
import { Link } from "@mui/material";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const LogoIcon = () => {
  return (
    <Link href="/" position="center">
      <PointOfSaleIcon sx={{width:200, color:"white" , marginTop:5}}/>
    </Link>
  );
};

export default LogoIcon;
