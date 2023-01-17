import react, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Typography,
  CardMedia
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CardList = ({ cardList }) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        {cardList.map((res) => {
          return (
            <Grid item xs={12} md={3}>
              <Card key={res.title} sx={{ mb: { xs: 1, lg: 2 } }}>
                <CardContent>
                  <Carousel dynamicHeight swipeable>
                    {res.images.map((image) => {
                      return <img alt={image} key={image} src={image} />;
                    })}
                  </Carousel>
                  <Typography>Title: {res.title}</Typography>
                  <Typography>Address: {res.address}</Typography>
                  <Typography>Phone: {res.phone}</Typography>
                  <Typography>Rating: {res.rating}</Typography>
                  <Typography>
                    Open/Closed: {res.open_now ? "Open" : "Closed"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
