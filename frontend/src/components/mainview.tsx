import React, {useState, useEffect} from "react";
import L from "leaflet";
import axios from "axios";
import Shops from "./Shop/shops";
import { ShopType } from "./Shop/shop";
import GourmetMap from "./Map/gourmetmap";
import { MarkerType } from "./Map/marker";
import { Container, Grid } from "@material-ui/core";

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

    let geoLat = 0;
    let geoLng = 0;
    let sumCnt = 0;
    const markers: Array<MarkerType> = shops.map((shop) => {
        if (shop.geocode !== null) {
            geoLat += shop.geocode.lat;
            geoLng += shop.geocode.lng;
            sumCnt++;
        }
        return {
            position: L.latLng(shop.geocode.lat, shop.geocode.lng),
            popup: shop.name,
            iconKind: "cake-red"
        };
    });

    geoLat /= sumCnt > 0 ? sumCnt : 1;
    geoLng /= sumCnt > 0 ? sumCnt : 1;

    // 仮の値
    console.log(geoLat, geoLng);
    const centerMarker: MarkerType = {
        position: L.latLng([geoLat, geoLng]),
        popup: "現在地",
    }

    return (
        <div id="main">
            <Container maxWidth="xl">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                <Grid item xs={3}>
                    <Shops shops={shops} />
                </Grid>
                <Grid item xs={9}>
                    <GourmetMap
                        zoomValue={13}
                        markers={markers}
                        centerMarker={centerMarker}
                    />
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MainView;