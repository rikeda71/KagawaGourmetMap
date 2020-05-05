import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export type MarkerType = {
    position: L.LatLng,
    attribution?: string,
    draggable?: boolean,
    iconKind?: string,
    zIndexOffset?: number,
    opacity?: number,
    popup: string
};


const MyMarker: React.FC<MarkerType> = (props) => {
    const cakeIcon: L.Icon = new L.Icon(
        {iconUrl: require("../../assets/cake-red.png"), iconSize: [30, 30], iconAnchor: [30, 30]}
    );
    const kindToIcon: Map<string, L.Icon> = new Map([
        ["cake-red", cakeIcon]
    ]);
    const markerIcon = kindToIcon.has(props.iconKind) ? kindToIcon.get(props.iconKind) : null;
    return (
      <Marker
        position={props.position}
        attribution={props.attribution}
        draggable={props.draggable}
        icon={cakeIcon}
        zIndexOffset={props.zIndexOffset}
        opacity={props.opacity}
       >
          <Popup>{props.popup}</Popup>
      </Marker>
    )
}

export const Markers: React.FC<{markers: Array<MarkerType>}> = (props) => {
    const markers: Array<MarkerType> = props.markers;
    return (
        <div id="markers">
            {markers.map((marker, i) => {return (<MyMarker {...marker} key={i} />)})}
        </div>
    )
}