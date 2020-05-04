
import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import MainView from "../components/mainview";

const components = storiesOf("Components", module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add("MainView", () => (
      <MainView request_url="http://localhost:4010" />
  ));