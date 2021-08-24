import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopBar from "./TopBar/TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

export default function ToyShop() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
        <div classname={classes.home}>
          <TopBar />
          <div className={classes.main}></div>
          <div className={classes.bottomBar}></div>
        </div>
      </Router>
    </React.Fragment>
  );
}
