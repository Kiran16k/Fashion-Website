import React from "react";
import { FaHeart } from "react-icons/fa";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const LastestProducts = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  return (
    <Swiper
      rewind={true}
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
    >
      <div className="SubBodyCards-container">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={3}
              className="subBodyCards-content"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              style={{ boxShadow: "none" }}
            >
              <img
                src={hoveredIndex === index ? image.hover : image.original}
                alt={`Img ${index}`}
                className="SubBodyCards-image"
              />
              <div className="heart-icon">
                <FaHeart />
              </div>
              <div className="badge-container absolute left top z-1">
                <div className="sale-badge badge-circle">
                  <div className="badge-inner  on-sale">
                    <span className="onsale">Sale!</span>
                  </div>
                </div>
                {(index === 0 || index === 2) && (
                  <div className="sale-badge badge-circle">
                    <div className="badge-inner is-small">New</div>
                  </div>
                )}
                {hoveredIndex === index && (
                  <div className="quick-view-text">Quick View</div>
                )}
              </div>
              <div className="SubBodyCards-details">
                <Typography variant="body1" className="subBodyCards-category">
                  {image.category}
                </Typography>
                <Typography variant="body2" className="SubBodyCards-name">
                  {image.name}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" className="word-with-line">
                    {image?.mrp}
                  </Typography>
                  <Typography variant="body2" className="SubBodyCards-currency">
                    {image.currency}
                  </Typography>
                </div>
              </div>
            </Paper>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
export default LastestProducts;
