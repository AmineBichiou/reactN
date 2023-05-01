import React from 'react'

import { Card, CardContent, Typography, Box } from "@mui/material";
const TopCtagory = () => {
  return (
    <div style={{ margin: "0 auto", width: "100%"   }}>
    <Card style={{ width: "50%", height: "50%" }}>
      <Box p={3} display="flex" alignItems="center">
        <Typography variant="h4" align='cenetr'>Top Category</Typography>
      </Box>
      <CardContent> 
      <Typography variant="h4" >aa</Typography>
      </CardContent>
    </Card>
  </div>
  )
}

export default TopCtagory