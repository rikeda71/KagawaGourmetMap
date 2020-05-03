import React from "react";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
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


type gourmetMapProps = {
    zoomValue: number,
    centorPosition: LatLngExpression,
    markers: Array<LatLngExpression>
};


const GourmetMap : React.FC<gourmetMapProps> = (props) => {
    const zoomValue = props.zoomValue;
    const centorPosition = props.centorPosition;
    const markers: Array<LatLngExpression> = props.markers;
    const style ={height: "80vh", weight: "80vh"};

    rewriteIconState();

    return (
        <div id="map">
            <Map zoom={zoomValue} center={centorPosition} style={style}>
                <TileLayer
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            <Marker position={markers[0]}>
                <Popup>popUp</Popup>
            </Marker>
            </Map>
        </div>
    )
}

export default GourmetMap