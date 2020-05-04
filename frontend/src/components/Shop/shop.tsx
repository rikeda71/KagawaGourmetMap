import React from "react";

type DateType = {
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

export const Shop: React.FC<ShopType> = (props) => {
    return (
        <div key={props.shopId}>
            <p key={props.shopId}>{props.shopId} : {props.name}</p>
        </div>
    )
}