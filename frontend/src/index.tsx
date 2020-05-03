import React from "react";
import ReactDOM from "react-dom";
import GourmetMap, { MarkerType } from "./components/map";
import Shops from "./components/shops";

const root = document.getElementById("root");
const Root: React.FC = () => {
  const markers: Array<MarkerType> = [
    { position: [35.362222, 138.731388], popup: "first marker" },
    { position: [36.362222, 138.731388], popup: "second marker" },
  ];
  return (
    <div>
      <h1>{"Hello World"}</h1>
      <GourmetMap
        zoomValue={7}
        centorPosition={[35.562222, 138.731388]}
        markers={markers}
      />
      <Shops request_url="http://localhost:4010"/>
    </div>
  );
};

ReactDOM.render(<Root />, root);
