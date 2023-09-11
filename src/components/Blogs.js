import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function BlogCard({ blogData }) {
  return (
    <div className="blogs-container" id="latestNews">
      <Swiper
        rewind={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
      >
        {blogData.map((data) => (
          <SwiperSlide>
            <div className="blog-data" key={data.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <div
                    class="badge-container absolute left top z-1"
                    id="badge-container"
                  >
                    <div class=" badge badge-circle" id="badge-circle">
                      <div
                        class="badge-inner secondary on-sale"
                        id="badge-inner"
                      >
                        <span class="onsale" id="onsale">
                          <p>{data.date}</p>
                          <p>{data.month}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.img}
                    alt="Blog post"
                    id="blog-card-img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
