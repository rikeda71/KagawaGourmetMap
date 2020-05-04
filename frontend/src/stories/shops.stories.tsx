import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Shops from "../components/Shop/shops";

const components = storiesOf("Components", module)
components
    .addDecorator(withKnobs)
    .addDecorator(withInfo({inline: true}))
    .add("Shops", () => (
        <Shops shops={[
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}},
        ]}/>
    ));