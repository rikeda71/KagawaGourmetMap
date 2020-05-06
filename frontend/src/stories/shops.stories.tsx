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
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 1, name: "ルーヴ", geocode: {lat: 34.327811, lng: 134.07525}, point: 4.5, times: [{day: "sunday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
            {shopId: 2, name: "かにわしタルト", geocode: {lat: 34.317839,  lng: 134.05451}, point: 4.2, times: [{day: "monday", startTime: "10:00", lastTime: "10:00"}]},
        ]}/>
    ));