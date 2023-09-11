import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const InstaCards = ({ instagramImgs }) => {
  return (
    <div className="instaimg-container">
      {instagramImgs.map((img, index) => (
        <div key={index} className="instaimg-inner-container">
          <Paper className="content">
            <div className="content-overlay"></div>
            <img
              className="content-image"
              src={img.img}
              alt={`Instagram Post ${index}`}
            />
            <div className="content-details fadeIn-bottom">
              <Typography variant="body1" className="content-text">
                {img.caption}
              </Typography>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default InstaCards;
