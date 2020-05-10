import React, { useEffect, useState, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { objectSort } from "../../helper/objectSort";
import cakeImage from "../../assets/cake-red.png";

export type MarkersPropsType = {
  markers: Array<MarkerType>;
  centerPosition: L.LatLng;
  onMouseMorker: number;
};

export type MarkerType = {
  position: L.LatLng;
  attribution?: string;
  draggable?: boolean;
  iconKind?: string;
  zIndexOffset?: number;
  opacity?: number;
  popup: string;
};

const MyMarker: React.FC<{ marker: MarkerType; onMouseMarker: number; id: number }> = (props) => {
  const marker = props.marker;
  const cakeIcon: L.Icon = new L.Icon({
    iconUrl: cakeImage,
    iconSize: [30, 30],
    iconAnchor: [20, 30],
    popupAnchor: [-2, -15],
  });
  const bigCakeIcon: L.Icon = new L.Icon({
    iconUrl: cakeImage,
    iconSize: [40, 40],
    iconAnchor: [20, 30],
    popupAnchor: [-2, -15],
  });
  const kindToIcon: Map<string, L.Icon> = new Map([
    ["cake-red", cakeIcon],
    ["cake-red-big", bigCakeIcon],
  ]);

  let markerIcon;
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current !== null && props.onMouseMarker === props.id) {
      markerRef.current.leafletElement.setIcon(kindToIcon.get(marker.iconKind + "-big"));
    } else {
      markerRef.current.leafletElement.setIcon(kindToIcon.get(marker.iconKind));
    }
  });

  if (kindToIcon.has(marker.iconKind)) {
    markerIcon = (
      <Marker
        ref={markerRef}
        position={marker.position}
        attribution={marker.attribution}
        draggable={marker.draggable}
        icon={kindToIcon.get(marker.iconKind)}
        zIndexOffset={marker.zIndexOffset}
        opacity={marker.opacity}
      >
        <Popup>{marker.popup}</Popup>
      </Marker>
    );
  } else {
    markerIcon = (
      <Marker
        ref={markerRef}
        position={marker.position}
        attribution={marker.attribution}
        draggable={marker.draggable}
        zIndexOffset={marker.zIndexOffset}
        opacity={marker.opacity}
      >
        <Popup>{marker.popup}</Popup>
      </Marker>
    );
  }

  return markerIcon;
};

export const Markers: React.FC<MarkersPropsType> = (props) => {
  const markers: Array<MarkerType> = props.markers;
  const [centerPosition, setCenterPosition] = useState<L.LatLng>(L.latLng([0, 0]));

  useEffect(() => {
    if (JSON.stringify(objectSort(props.centerPosition)) !== JSON.stringify(objectSort(centerPosition))) {
      setCenterPosition(() => {
        return props.centerPosition;
      });
    }
  });
  return (
    <div id="markers">
      {markers.map((marker, i) => {
        return <MyMarker marker={marker} onMouseMarker={props.onMouseMorker} key={i} id={i + 1} />;
      })}
      <Marker position={centerPosition} key="currentPos">
        <Popup>{"現在地"}</Popup>
      </Marker>
    </div>
  );
};
