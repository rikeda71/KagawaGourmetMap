import React from "react";
import Card from "@material-ui/core/Card";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { CardContent, Typography, makeStyles, CardActionArea } from "@material-ui/core";
import weekIcons from "./weekicons";

export type DateType = {
    day: string,
    startTime: string,
    lastTime: string
}

type LatLng = {
    lat: number,
    lng: number
}

export type ShopType = {
    shopId: number,
    name: string,
    times?: Array<DateType>,
    point?: number,
    geocode: LatLng
}

const cardStyle = makeStyles({
    card: {
        margin: "0 2px"
    }
})

const pointStar = (point) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {starIcons.push(<StarBorderIcon color="primary" />);}
    if (!point) {
        return starIcons;
    } else {
        let cnt = 0;
        while (point >= 0.8) {
            starIcons[cnt] = <StarIcon color="primary" />;
            point -= 1;
            cnt++;
        }
        if (point > 0.4) {
            starIcons[cnt] = <StarHalfIcon color="primary" />;
        }
    }
    return starIcons;
}

export const Shop: React.FC<ShopType> = (props) => {
    const classes = cardStyle();
    return (
        <CardActionArea
          onClick={e => {console.log("aaa")}}
          key={props.shopId}
          className={classes.card}
        >
            <Card key={props.shopId}>
                <CardContent>
                    <Typography variant="h5" component="h1">
                        {props.name}
                    </Typography>
                {pointStar(props.point)}
                <br />
                {weekIcons(props.times)}
                </CardContent>
            </Card>
        </CardActionArea>
    )
}