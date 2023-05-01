import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <div style={{ margin: "0 auto", width: "80%", textAlign: "right" ,marginLeft:"18%" }}>
      <Card style={{ width: "100%", height: "80%" }}>
        <Box p={4} display="flex" alignItems="center">
          <Typography variant="h4">{props.title}</Typography>
        </Box>
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
};

export default BaseCard;
