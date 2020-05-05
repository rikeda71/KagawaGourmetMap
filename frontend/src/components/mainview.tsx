import React, {useState, useEffect} from "react";
import L from "leaflet";
import axios from "axios";
import Shops from "./Shop/shops";
import { ShopType } from "./Shop/shop";
import GourmetMap from "./Map/gourmetmap";
import { MarkerType } from "./Map/marker";
import { nowIcon } from "./Map/icon";

type MainViewProps = {
    request_url: string,
    params?: {query?: string}
}

const MainView: React.FC<MainViewProps> = (props) => {
    const url = props.request_url;
    const params = props.params;
    const [shops, setShops] = useState<Array<ShopType>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get<Array<ShopType>>(
                url + "/shop", {params: typeof params !== "undefined" ? params: null }
            )
            setShops(result.data);
        }
        fetchData();
    }, []);

    const markers: Array<MarkerType> = shops.map((shop) => {
        return {
            position: L.latLng(shop.geocode.lat, shop.geocode.lng),
            popup: shop.name,
        };
    });

    // 仮の値
    const centerMarker: MarkerType = {
        position: L.latLng(34.327811, 134.07525),
        popup: "現在地",
        iconKind: "cake-red"
    }

    return (
        <div id="main">
          <Shops shops={shops} />
          <GourmetMap
              zoomValue={7}
              markers={markers}
              centerMarker={centerMarker}
          />
        </div>
    )
}

export default MainView;