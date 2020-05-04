import React, {useState, useEffect} from "react";
import axios from "axios";
import Shops from "./Shop/shops";
import { ShopType, Shop } from "./Shop/shop";
import GourmetMap from "./Map/gourmetmap";
import { MarkerType } from "./Map/marker";

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

    const markers = shops.map((shop) => {
        return {
            position: [shop.geocode.lat, shop.geocode.lng],
            popup: shop.name
        };
    });

    return (
        <div id="main">
          <Shops shops={shops} />
          <GourmetMap
              zoomValue={7}
              centorPosition={[34.327811, 134.07525]}
              markers={markers}
          />
        </div>
    )
}

export default MainView;