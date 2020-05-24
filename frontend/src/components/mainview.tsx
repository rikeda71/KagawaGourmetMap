import React, { useState, useEffect } from "react";
import L from "leaflet";
import axios from "axios";
import Shops from "./Shop/shops";
import { ShopType } from "./Shop/shop";
import GourmetMap from "./Map/gourmetmap";
import { MarkerType } from "./Map/marker";
import { Container, Grid } from "@material-ui/core";
import SearchBar from "./SearchBar/searchbar";

type MainViewProps = {
  request_url: string;
  params?: { query?: string };
};

const gridStyle: React.CSSProperties = {
  padding: "2px",
  marginBottom: "auto",
};

const MainView: React.FC<MainViewProps> = (props) => {
  const url = props.request_url;
  const params = props.params;
  const [shops, setShops] = useState<Array<ShopType>>([]);
  const [markers, setMarkers] = useState<Array<MarkerType>>([]);
  const [onMounseMorker, setOnMounseMorker] = useState<number>(-1);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get<Array<ShopType>>(url + "/shop", { params: typeof params !== "undefined" ? params : null })
        .then((res) => {
          console.log(res.data);
          setShops(res.data);
        });
    };
    fetchData();
  }, []);

  return (
    <div id="main">
      <Container maxWidth="xl">
        <Grid style={gridStyle}>
          <SearchBar />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item style={gridStyle}>
            <Shops shops={shops} setOnMouseMorker={setOnMounseMorker} key="shops" />
          </Grid>
          <Grid item style={gridStyle}>
            <GourmetMap
              zoomValue={13}
              markers={markers}
              setMarkers={setMarkers}
              parentShops={shops}
              onMouseMorker={onMounseMorker}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainView;
