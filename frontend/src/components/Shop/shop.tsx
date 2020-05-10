import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography, makeStyles, CardActionArea } from "@material-ui/core";
import weekIcons from "./weekicons";
import pointStar from "./pointstar";

export type DateType = {
  day: string;
  startTime: string;
  lastTime: string;
};

type LatLng = {
  lat: number;
  lng: number;
};

export type ShopType = {
  shopId: number;
  name: string;
  times?: Array<DateType>;
  point?: number;
  geocode: LatLng;
  setOnMouseMorker: Function;
};

const cardStyle = makeStyles({
  card: {
    margin: "0 2px",
  },
});

export const Shop: React.FC<ShopType> = (props) => {
  const classes = cardStyle();
  return (
    <CardActionArea
      onClick={(e) => {
        console.log("aaa");
      }}
      key={props.shopId}
      className={classes.card}
      // ここで親のstateを変更し，markerに反映
      onMouseEnter={() => {
        console.log("mouse over");
        props.setOnMouseMorker(() => props.shopId);
      }}
      onMouseLeave={() => {
        console.log("mouse leave");
        props.setOnMouseMorker(() => 0);
      }}
    >
      <Card key={props.shopId}>
        <CardContent key={props.shopId}>
          <Typography variant="h5" component="h1">
            {props.name}
          </Typography>
          {pointStar(props.point)}
          <br />
          {weekIcons(props.times)}
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
