import React from "react";
import L from "leaflet";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import GourmetMap from "../components/Map/gourmetmap";


const components = storiesOf("Components", module);
const centerMarker: MarkerType = {
    position: L.latLng(34.327811, 134.07525),
    popup: "現在地",
}

components
    .addDecorator(withKnobs)
    .addDecorator(withInfo({inline: true}))
    .add("GourmetMap-normal", () => (
        <GourmetMap
        zoomValue={7}
        centerMarker={centerMarker}
        markers={
          [
            { position: L.latLng([35.362222, 138.731388]), popup: "first marker" },
            { position: L.latLng([36.362222, 138.731388]), popup: "second marker" },
          ]
        }
        />
    ))
    .add("GourmetMap-using", () => (
        <GourmetMap
        zoomValue={12.2}
        centerMarker={centerMarker}
        markers={
          [
            { position: L.latLng([34.327811, 134.07525]), popup: "ルーヴ" },
            { position: L.latLng([34.317839, 134.05451]), popup: "かにわしタルト" },
          ]
        }
        />
    ))
    ;