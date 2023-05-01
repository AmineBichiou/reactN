import React from 'react'
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from '../baseCard/BaseCard';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StatBar = () => {
    const optionssalesoverview = {
        grid: {
          show: true,
          borderColor: "transparent",
          strokeDashArray: 2,
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "42%",
            endingShape: "rounded",
            borderRadius: 5,
          },
        },
    
        colors: ["#fb9678", "#03c9d7"],
        fill: {
          type: "solid",
          opacity: 1,
        },
        chart: {
          offsetX: -15,
          toolbar: {
            show: false,
          },
          foreColor: "#adb0bb",
          fontFamily: "'DM Sans',sans-serif",
          sparkline: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        legend: {
          show: false,
        },
        xaxis: {
          type: "category",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        yaxis: {
          show: true,
          min: 100,
          max: 400,
          tickAmount: 3,
          labels: {
            style: {
              cssClass: "grey--text lighten-2--text fill-color",
            },
          },
        },
        stroke: {
          show: true,
          width: 5,
          lineCap: "butt",
          colors: ["transparent"],
        },
        tooltip: {
          theme: "dark",
        },
      };
      const seriessalesoverview = [
        {
          name: "Ample Admin",
          data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
        },
        
      ];
      return (
        
  
<div style={{ margin: "0 auto", width: "80%", textAlign: "right" ,marginLeft:"18%" }}>
      <Card style={{ width: "100%", height: "30%" }}>
        <Box p={4} display="flex" alignItems="center">
          <Typography variant="h4">Sales Overview</Typography>
        </Box>
        <CardContent><Chart
    options={optionssalesoverview}
    series={seriessalesoverview}
    type="bar"
    height="150px"
  /></CardContent>
      </Card>
    </div>
      );
}

export default StatBar