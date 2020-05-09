import React from "react";
import ReactDOM from "react-dom";
import MainView from "./components/mainview";

const root = document.getElementById("root");
const Root: React.FC = () => {
  return <MainView request_url="http://localhost:4010" />;
};

ReactDOM.render(<Root />, root);
