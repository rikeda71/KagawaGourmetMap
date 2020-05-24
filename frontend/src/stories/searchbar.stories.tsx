import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SearchBar from "../components/SearchBar/searchbar";

const templates = storiesOf("Organisms", module);
templates.addDecorator(withKnobs).add("SearchBar", () => <SearchBar />);
