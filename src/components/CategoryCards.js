import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CategoryCards = ({ imgdata }) => {
  return (
    <div className="category-cards">
      <Swiper
        rewind={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {imgdata.map((category) => (
          <SwiperSlide key={category.id}>
            <Paper elevation={3} className="category-card">
              <Grid container>
                <Grid item xs={12}>
                  <img src={category.image} alt={category.name} />
                </Grid>
                <Grid item xs={12} className="category-content">
                  <Typography variant="h4">
                    <h4>{category.name}</h4>
                  </Typography>
                  <Typography variant="body1">
                    <p>{category.products}</p>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCards;
