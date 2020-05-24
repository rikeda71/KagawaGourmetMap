import React from "react";
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
  setOnMouseMorker?: Function;
};

const cardStyle = makeStyles({
  card: {
    marginBottom: "8px",
  },
  cardMainContent: {
    padding: "8px",
    paddingLeft: "4px",
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
      onMouseEnter={() => {
        console.log("mouse over");
        if (!!props.setOnMouseMorker) {
          props.setOnMouseMorker(() => props.shopId);
        }
      }}
      onMouseLeave={() => {
        console.log("mouse leave");
        if (!!props.setOnMouseMorker) {
          props.setOnMouseMorker(() => 0);
        }
      }}
    >
      <Card key={props.shopId} variant="outlined">
        <CardContent key={props.shopId} className={classes.cardMainContent}>
          <Typography variant="h6" component="h1" key={props.shopId}>
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
