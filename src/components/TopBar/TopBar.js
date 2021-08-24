import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

export default function Top() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.topBar}>
        <Header />
        <div className={classes.slider}></div>
      </div>
    </React.Fragment>
  );
}
