import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { Markers, MarkerType } from "./marker";
import { ShopType } from "../Shop/shop";
import { objectSort } from "../../helper/objectSort";

const mapStyle: React.CSSProperties = {
  height: "70vh",
  width: "70vw",
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
};

type GourmetMapProps = {
  zoomValue: number;
  markers: Array<MarkerType>;
  setMarkers: Function;
  parentShops: Array<ShopType>;
};

function getMarkerInfo(shops: Array<ShopType>) {
  const markers = shops.map((shop) => {
    return {
      position: L.latLng(shop.geocode.lat, shop.geocode.lng),
      popup: shop.name,
      iconKind: "cake-red",
    };
  });
  return markers;
}

const GourmetMap: React.FC<GourmetMapProps> = (props) => {
  const zoomValue = props.zoomValue;
  const [centerPosition, setCenterPosition] = useState<L.LatLng>(L.latLng([0, 0]));
  const [oldShops, setOldShops] = useState<Array<ShopType>>([]);
  let mapRef: React.MutableRefObject<any> = useRef(null);

  function calcCenterPositon(markers: Array<MarkerType>) {
    let lat = 0;
    let lng = 0;
    if (markers.length < 1) {
      return L.latLng([lat, lng]);
    }
    markers.forEach((marker) => {
      lat += marker.position.lat;
      lng += marker.position.lng;
    });
    return L.latLng([lat / markers.length, lng / markers.length]);
  }

  rewriteIconState();

  useEffect(() => {
    const newShops = props.parentShops;
    if (
      newShops.length !== oldShops.length &&
      JSON.stringify(objectSort(newShops)) !== JSON.stringify(objectSort(oldShops))
    ) {
      const markers = getMarkerInfo(props.parentShops);
      props.setMarkers(() => {
        return markers;
      });
      setOldShops(() => {
        return newShops;
      });
      setCenterPosition(() => {
        return calcCenterPositon(markers);
      });
      mapRef.current.leafletElement.setView(centerPosition, zoomValue);
    }
  });

  return (
    <div id="map">
      <Map ref={mapRef} zoom={zoomValue} center={centerPosition} style={mapStyle} setView={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers markers={props.markers} centerPosition={centerPosition} />
      </Map>
    </div>
  );
};

export default GourmetMap;
