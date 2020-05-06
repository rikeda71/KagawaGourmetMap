import React from "react";
import {Shop, ShopType} from "./shop";


const Shops: React.FC<{shops: Array<ShopType>}> = (props) => {
    const shops = !!props.shops ? props.shops : []
    return (
        <div id="shops" className="scroller">
            {shops.map(shop => {return (<Shop {...shop} key={shop.shopId} />)})}
        </div>
    )
}

export default Shops;