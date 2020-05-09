import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import MainView from "../components/mainview";

const templates = storiesOf("Templates", module);
templates.addDecorator(withKnobs).add("MainView", () => <MainView request_url="http://localhost:4010" />);
