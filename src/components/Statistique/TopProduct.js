import React from 'react'
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from '../baseCard/BaseCard';

const TopProduct = () => {
  return (
    <div style={{ margin: "0 auto", width: "50%", marginLeft:"27%" }}>
      <Card style={{ width: "50%", height: "50%" }}>
        <Box p={7} display="flex" alignItems="center">
          <Typography variant="h4" align='cenetr'>Top Product</Typography>
        </Box>
        <CardContent> 
        <Typography variant="h4" > <center>aa</center></Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TopProduct