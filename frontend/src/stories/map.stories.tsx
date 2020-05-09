import React, { useState } from "react";
import L from "leaflet";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import GourmetMap from "../components/Map/gourmetmap";
import { MarkerType } from "../components/Map/marker";

const organisms = storiesOf("Organisms", module);

function CallNormalGourmentMap() {
  const [markers, setMarkers] = useState<Array<MarkerType>>([]);
  const normalShops = [
    {shopId: 1, name: "first marker", geocode: L.latLng([35.362222, 138.731388])},
    {shopId: 2, name: "second marker", geocode: L.latLng([36.362222, 138.731388])}
  ];
  return (
        <GourmetMap
        zoomValue={7}
        markers={markers}
        setMarkers={setMarkers}
        parentShops={normalShops}
        />
  );
}

function CallUsingGourmetMap() {
  const [markers, setMarkers] = useState<Array<MarkerType>>([]);
  const usingShops = [
    {shopId: 1, name: "ルーヴ", geocode: L.latLng([34.327811, 134.07525])},
    {shopId: 2, name: "かにわしタルト", geocode: L.latLng([34.317839, 134.05451])},
    {shopId: 3, name: "ラ・ファミーユ", geocode: L.latLng([34.334304, 134.071449])}
  ];
  return (
      <GourmetMap
      zoomValue={12.2}
      markers={markers}
      setMarkers={setMarkers}
      parentShops={usingShops}
      />
  );
}

organisms
    .addDecorator(withKnobs)
    .add("GourmetMap-normal", () => <CallNormalGourmentMap />)
    .add("GourmetMap-using", () => <CallUsingGourmetMap />);