import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Shops from "../components/shops";

const components = storiesOf("Components", module)
components
    .addDecorator(withKnobs)
    .addDecorator(withInfo({inline: true}))
    .add("Shops", () => (
        <Shops request_url="http://localhost:4010"/>
    ));