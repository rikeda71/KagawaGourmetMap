import React from "react";
import ReactDOM from "react-dom";
import GourmetMap from "./components/map";

const root = document.getElementById("root");
const Root: React.FC = () => {
  return (
    <div>
      <h1>{"Hello World"}</h1>
      <GourmetMap
        zoomValue={13}
        centorPosition={[35.562222, 139.731388]}
        markers={[[35.362222, 138.731388]]}
      />
    </div>
  );
};

ReactDOM.render(<Root />, root);
