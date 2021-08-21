import React from "react";
import "./style.css";
import { loadCSS } from "fg-loadcss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Header />
      </Router>
    </React.Fragment>
  );
}
