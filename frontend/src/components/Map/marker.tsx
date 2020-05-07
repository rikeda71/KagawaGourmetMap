import React from "react";
import { Marker, Popup } from "react-leaflet";
import L  from "leaflet";
import cakeImage from "../../assets/cake-red.png";

export type MarkerType = {
    position: L.LatLng,
    attribution?: string,
    draggable?: boolean,
    iconKind?: string,
    zIndexOffset?: number,
    opacity?: number,
    popup: string
};

const cakeIcon: L.Icon = new L.Icon(
    {iconUrl: cakeImage,
     iconSize: [30, 30],
     iconAnchor: [20, 30],
     popupAnchor: [-2, -15],
    }
);
const kindToIcon: Map<string, L.Icon> = new Map([
    ["cake-red", cakeIcon]
]);

const MyMarker: React.FC<MarkerType> = (props) => {
    let markerIcon;
    if (kindToIcon.has(props.iconKind)) {
        markerIcon = <Marker
                       position={props.position}
                       attribution={props.attribution}
                       draggable={props.draggable}
                       icon={kindToIcon.get(props.iconKind)}
                       zIndexOffset={props.zIndexOffset}
                       opacity={props.opacity}
                     >
                        <Popup>{props.popup}</Popup>
                    </Marker>;
    } else {
        markerIcon = <Marker
                       position={props.position}
                       attribution={props.attribution}
                       draggable={props.draggable}
                       zIndexOffset={props.zIndexOffset}
                       opacity={props.opacity}
                     >
                        <Popup>{props.popup}</Popup>
                    </Marker>;
    }

    return (markerIcon);
}

export const Markers: React.FC<{markers: Array<MarkerType>}> = (props) => {
    const markers: Array<MarkerType> = props.markers;
    return (
        <div id="markers">
            {markers.map((marker, i) => {return (<MyMarker {...marker} key={i} />)})}
        </div>
    )
}