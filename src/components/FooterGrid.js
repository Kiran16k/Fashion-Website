import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsEnvelope, BsPinterest } from "react-icons/bs";
import {
  Container,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
  Paper,
} from "@mui/material";

import { latestNewsData, tagsData } from "../Utils/Data";

const Footer2 = () => {
  return (
    <Paper
      elevation={3}
      className="footer-widgets footer-2 dark"
      style={{ backgroundColor: "#777", color: "white" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About us
            </Typography>
            <Divider
              className="divider small"
              style={{ marginBottom: "3px" }}
            />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </Typography>
            <div className="social-icons follow-icons">
              <FaFacebookF className="social-media-icons" />
              <FaInstagram className="social-media-icons" />
              <FaTwitter className="social-media-icons" />
              <BsEnvelope className="social-media-icons" />
              <BsPinterest className="social-media-icons" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="widget-title">
              Latest News
            </Typography>
            <Divider
              className="divider small"
              style={{ marginBottom: "3px" }}
            />
            <ul>
              {latestNewsData.map((item, index) => (
                <li key={index} className="recent-blog-posts-li">
                  <div className="flex-row recent-blog-posts">
                    <div className="flex-col">
                      <div className="latest-badge post-date badge-small">
                        <div className="bg-fill" id="badge-inner-latest">
                          <span className="post-date-day">{item.date}</span>
                          <br />
                          <span>{item.month}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col flex-grow">
                      <Link
                        to={item.url}
                        title={item.title}
                        className="latest-news-link"
                      >
                        {item.title}
                      </Link>
                      <span className="is-xsmall">
                        <Link to={`${item.url}#respond`}></Link>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Tags
            </Typography>
            <Divider className="divider" />
            <div className="tags">
              {tagsData.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  style={{ fontSize: "17.6pt" }}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Signup for Newsletter
            </Typography>
            <Divider className="divider small" />
            <Typography variant="body1">
              Signup to get news about Flatsome & WooCommerce. We don't spam!
            </Typography>
            <form>
              <TextField
                id="footer2-email"
                type="email"
                name="your-email"
                label="Your Email (required)"
                fullWidth
              />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer2;
