import React from "react";
import { Marker, Popup } from "react-leaflet";

export type MarkerType = {
    position: LatLngExpression,
    popup: string
};

const MyMarker: React.FC<MarkerType> = (props) => {
    return (
      <Marker
       position={props.position}
       key={props.popup}
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