import React, {useState, useEffect} from "react";
import axios, { AxiosInstance, AxiosResponse } from "axios";

type DateType = {
    day: string,
    startTime: string,
    lastTime: string
}

type LatLng = {
    lat: number,
    lng: number
}

type ShopType = {
    shopId: number,
    name: string,
    times: Array<DateType>,
    point: number,
    geocode: LatLng
}


type ShopsProps = {
    request_url: string,
    params?: {query?: string}
}

const Shop: React.FC<ShopType> = (props) => {
    return (
        <div key={props.shopId}>
            <p key={props.shopId}>{props.shopId} : {props.name}</p>
        </div>
    )
}

const Shops: React.FC<ShopsProps> = (props) => {
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

    return (
        <div id="shops">
            {shops.map(shop => {return (<Shop {...shop} key={shop.shopId} />)})}
        </div>
    )
}

export default Shops;