import React from "react";
import { Shop, ShopType } from "./shop";
import { List } from "@material-ui/core";

const Shops: React.FC<{ shops: Array<ShopType>; setOnMouseMorker?: Function }> = (props) => {
  const shops = props.shops;
  return (
    <List style={{ maxWidth: "20vw", maxHeight: "100vh", overflow: "auto" }} key="shopsList">
      {shops.map((shop) => {
        return <Shop {...shop} key={shop.name + shop.shopId} setOnMouseMorker={props.setOnMouseMorker} />;
      })}
    </List>
  );
};

export default Shops;
