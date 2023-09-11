import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import LastestProducts from "./LastestProducts";
import {
  cardData,
  images,
  imgdata,
  instagramImgs,
  blogData,
} from "../Utils/Data";
import InstaCards from "./InstaCards";
import SignUp from "./SignUp";
import CategoryCards from "./CategoryCards";
import ScrollToTopButton from "./ScrollButton";
import BlogCard from "./Blogs";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Body = () => {
  const SectionTitle = ({ title }) => (
    <div className="sub-container1">
      <Typography variant="h3" className="sub-container1-section-title">
        <span className="line"></span>
        <span className="sub-container1-section-main-title">{title}</span>
        <span className="line"></span>
      </Typography>
    </div>
  );

  return (
    <div className="main-body">
      <ScrollToTopButton />
      <Paper elevation={3} className="main-body-banner">
        <div className="border-dash"></div>
        <div className="text-box">
          <Paper elevation={3}>
            <div className="text-inner text-background ">
              <Typography variant="h3">
                Up to
                <br />
                <span style={{ fontSize: "160%" }}>
                  <strong>
                    50<span style={{ fontSize: "75%" }}>%</span>
                    <br />
                  </strong>
                </span>
                off
              </Typography>
            </div>
          </Paper>
        </div>
        <div className="main-body-banner-text">
          <Typography variant="h1" className="uppercase-text">
            Shop Fashion <span>Clothes today</span>
          </Typography>
          <Typography variant="h3" className="thin-font">
            Add any text here..
          </Typography>
          <Link to="/" component={Link} className="shop-box">
            <span>Shop Now</span>
          </Link>
        </div>
      </Paper>
      <Grid
        container
        spacing={2}
        className="card-list"
        style={{ marginTop: "10px" }}
      >
        {cardData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              backgroundImage={card.backgroundImage}
              content={card.content}
            />
          </Grid>
        ))}
      </Grid>
      <div className="main-web-container">
        <SectionTitle title="Latest products sale" />
        <LastestProducts images={images} />
        <SectionTitle title="Browse our categories" />
        <CategoryCards imgdata={imgdata} />
        <SectionTitle title="Follow us on Instagram" />
        <InstaCards instagramImgs={instagramImgs} />
      </div>
      <SignUp />
      <Divider />
      <div className="main-web-container">
        <SectionTitle title="Latest News" />
      </div>
      <BlogCard blogData={blogData} />
      <div className="sub-container1">
        <Typography variant="h3" className="sub-container1-section-title">
          <span className="line"></span>
        </Typography>
      </div>
    </div>
  );
};
export default Body;
