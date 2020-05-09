import React from "react";
import { Shop, ShopType } from "./shop";
import { Scrollbars } from "react-custom-scrollbars";

const Shops: React.FC<{ shops: Array<ShopType> }> = (props) => {
  const shops = !!props.shops ? props.shops : [];
  return (
    <Scrollbars style={{ width: "30vw", height: "70vh" }} key="scrollbar">
      {shops.map((shop) => {
        return <Shop {...shop} key={shop.name + shop.shopId} />;
      })}
    </Scrollbars>
  );
};

export default Shops;
