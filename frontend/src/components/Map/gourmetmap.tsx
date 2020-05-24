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
  height: "80vh",
  width: "50vw",
  marginTop: "8px",
  marginBottom: "32px",
  marginRight: "8px",
  marginLeft: "8px",
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
  onMouseMorker: number;
};

const GourmetMap: React.FC<GourmetMapProps> = (props) => {
  const zoomValue = props.zoomValue;
  const [centerPosition, setCenterPosition] = useState<L.LatLng>(L.latLng([0, 0]));
  const [currentPosition, setCurrentPosition] = useState<L.LatLng>(L.latLng([0, 0]));
  const [oldShops, setOldShops] = useState<Array<ShopType>>([]);
  const [locationFound, setLocationFound] = useState<Boolean>(false);
  const mapRef = useRef(null);

  async function getGeoLoc(e) {
    await navigator.geolocation.getCurrentPosition(
      (p) => {
        setLocationFound(true);
        setCurrentPosition(L.latLng([p.coords.latitude, p.coords.longitude]));
      },
      (p) => {
        setLocationFound(false);
      }
    );
  }

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

  function getMarkerInfo(shops: Array<ShopType>): Array<MarkerType> {
    const markers = shops.map((shop) => {
      return {
        position: L.latLng(shop.geocode.lat, shop.geocode.lng),
        popup: shop.name,
        iconKind: "cake-red",
      };
    });
    return markers;
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
      const latLngBounds = L.latLngBounds(markers.map((marker) => marker.position));
      if (latLngBounds !== null) {
        mapRef.current.leafletElement.fitBounds(latLngBounds, { padding: [50, 50] });
        console.log(latLngBounds);
      } else {
        setCenterPosition(() => {
          return locationFound ? centerPosition : calcCenterPositon(markers);
        });
        mapRef.current.leafletElement.setView(centerPosition, zoomValue);
      }
    }
  });

  return (
    <div id="map">
      <Map
        ref={mapRef}
        zoom={zoomValue}
        center={centerPosition}
        style={mapStyle}
        setView={false}
        onviewreset={(e) => {
          getGeoLoc(e);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers
          markers={props.markers}
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
          onMouseMorker={props.onMouseMorker}
        />
      </Map>
    </div>
  );
};

export default GourmetMap;
