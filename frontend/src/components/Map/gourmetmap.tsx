import React, { useState, useRef }  from "react";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import {Markers, MarkerType} from "./marker";

const mapStyle: React.CSSProperties = {
    height: "70vh",
    width: "70vw",
    // marginBottom: 0,
    // marginRight: "1rem",
    // marginLeft: "auto",
    // position: "relative"
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
    markers: Array<MarkerType>,
    centerMarker: MarkerType,
}


const GourmetMap : React.FC<GourmetMapProps> = (props) => {
    const zoomValue = props.zoomValue;
    const [centorPosition, setCentorPosition] = useState<L.LatLng>(props.centerMarker.position);
    const mapRef = useRef(null);

    function centerMapView(e) {
        const {leafletElement} = mapRef.current;
        if (e) {
            console.log(centorPosition);
            leafletElement.panTo(centorPosition, { animate: true });
        }
    }
    rewriteIconState();

    return (
        <div id="map">
            <Map
              ref={mapRef}
              zoom={zoomValue}
              center={centorPosition}
              style={mapStyle}
              onmoveend={centerMapView}
             >
                <TileLayer
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Markers markers={props.markers}  />
                {!!props.centerMarker && <Markers markers={[props.centerMarker]} />}
            </Map>
        </div>
    )
}

export default GourmetMap