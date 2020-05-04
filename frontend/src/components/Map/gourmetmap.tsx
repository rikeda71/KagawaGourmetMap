import React from "react";
import L, { marker } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import {Markers, MarkerType} from "./marker";

const mapStyle: React.CSSProperties = {
    height: "70vh",
    width: "70vw",
    marginBottom: 0,
    marginRight: "1rem",
    marginLeft: "auto",
    position: "relative"
};

const rewriteIconState = () => {
    /* eslint-disable */
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconRetinaUrl,
      iconUrl: iconUrl,
      shadowUrl: shadowUrl,
    });
    /* eslint-disable */
}

type GourmetMapProps = {
    zoomValue: number,
    centorPosition: LatLngExpression,
    markers: Array<MarkerType>
}


const GourmetMap : React.FC<GourmetMapProps> = (props) => {
    const zoomValue = props.zoomValue;
    const centorPosition = props.centorPosition;

    rewriteIconState();

    return (
        <div id="map">
            <Map zoom={zoomValue} center={centorPosition} style={mapStyle}>
                <TileLayer
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            <Markers markers={props.markers} />
            </Map>
        </div>
    )
}

export default GourmetMap