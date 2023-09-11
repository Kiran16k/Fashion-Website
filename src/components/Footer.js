import React from "react";
import { products, footerLinks, paymentIcons } from "../Utils/Data";
import { Grid, Typography, Link, List, ListItem } from "@mui/material";

import Footer2 from "./FooterGrid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Grid container className="main-web-container">
        {products.map((widgetData, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Typography variant="h6">{widgetData.widgetTitle}</Typography>
            <List>
              {widgetData.products.map((product, productIndex) => (
                <ListItem key={productIndex}>
                  <Link to={product.link}>
                    <img width="70" height="70" src={product.imageSrc} alt="" />
                    <div className="footer-link">
                      <Typography variant="subtitle1">
                        {product.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        <span className="currencySymbol">$</span>
                        {product.price}
                      </Typography>
                    </div>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <div className="footer-container-2">
        <Footer2 />
      </div>
      <div className="footer-container-3">
        <div className="footer-container-3-ul">
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="copyright-footer">
            Copyright 2023 © <strong>Flatsome Theme</strong>
          </div>
        </div>
        <div className="payment-icons-list">
          {paymentIcons.map((paymentIcon, index) => (
            <FontAwesomeIcon
              icon={paymentIcon.icon}
              size="2xl"
              className="payment-icons"
              key={index}
              title={paymentIcon.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
