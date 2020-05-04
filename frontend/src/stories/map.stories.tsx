import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import GourmetMap from "../components/Map/gourmetmap";


const components = storiesOf("Components", module);

components
    .addDecorator(withKnobs)
    .addDecorator(withInfo({inline: true}))
    .add("GourmetMap-normal", () => (
        <GourmetMap
        zoomValue={7}
        centorPosition={[35.562222, 138.731388]}
        markers={
          [
            { position: [35.362222, 138.731388], popup: "first marker" },
            { position: [36.362222, 138.731388], popup: "second marker" },
          ]
        }
        />
    ))
    .add("GourmetMap-using", () => (
        <GourmetMap
        zoomValue={12.2}
        centorPosition={[34.293030, 134.064124]}
        markers={
          [
            { position: [34.327811, 134.07525], popup: "ルーヴ" },
            { position: [34.317839, 134.05451], popup: "かにわしタルト" },
          ]
        }
        />
    ))
    ;