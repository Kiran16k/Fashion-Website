import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomCard = ({ backgroundImage, content }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Card className="main-card-box" style={{ boxShadow: "none" }}>
      <div className="border-dash-card"></div>
      <Box className="sub-main-card-box" sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div" className="card-content">
            <h2 className="uppercase">
              <strong>{content}</strong>
            </h2>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CustomCard;
