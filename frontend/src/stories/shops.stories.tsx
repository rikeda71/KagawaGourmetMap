import React from "react";
import L from "leaflet";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Shops from "../components/Shop/shops";
import { Shop } from "../components/Shop/shop";
import { Card, CardContent, Typography } from "@material-ui/core";
import pointStar from "../components/Shop/pointstar";
import weekIcons from "../components/Shop/weekicons";

const atoms = storiesOf("Atoms", module);
atoms
  .addDecorator(withKnobs)
  .add("Shop-card-format", () => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1">
          {"ルーヴ"}
        </Typography>
      </CardContent>
    </Card>
  ))
  .add("pointStars", () => <div>{pointStar(3.5)}</div>)
  .add("weekIcons", () => <div>{weekIcons([{ day: "monday", startTime: "10:00", endTime: "19:00" }])}</div>);

const molecules = storiesOf("Molecules", module);
molecules
  .addDecorator(withKnobs)
  .add("Shop-normal", () => <Shop shopId={1} name="ルーヴ" geocode={L.latLng([34.327811, 134.07525])} times={[]} />)
  .add("Shop-add-open-day", () => (
    <Shop
      shopId={1}
      name="ルーヴ"
      geocode={L.latLng([34.327811, 134.07525])}
      times={[{ day: "sunday", startTime: "10:00", lastTime: "10:00" }]}
    />
  ))
  .add("Shop-add-point", () => (
    <Shop shopId={1} name="ルーヴ" geocode={L.latLng([34.327811, 134.07525])} times={[]} point={4.0} />
  ));

const organisms = storiesOf("Organisms", module);
organisms.addDecorator(withKnobs).add("Shops", () => (
  <Shops
    shops={[
      {
        shopId: 1,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 2,
        name: "かにわしタルト",
        geocode: { lat: 34.317839, lng: 134.05451 },
        point: 4.2,
        times: [{ day: "monday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 3,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 4,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 5,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 6,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 7,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 8,
        name: "ルーヴ",
        geocode: { lat: 34.327811, lng: 134.07525 },
        point: 4.5,
        times: [{ day: "sunday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 9,
        name: "かにわしタルト",
        geocode: { lat: 34.317839, lng: 134.05451 },
        point: 4.2,
        times: [{ day: "monday", startTime: "10:00", lastTime: "10:00" }],
      },
      {
        shopId: 10,
        name: "かにわしタルト",
        geocode: { lat: 34.317839, lng: 134.05451 },
        point: 4.2,
        times: [{ day: "monday", startTime: "10:00", lastTime: "10:00" }],
      },
    ]}
  />
));
