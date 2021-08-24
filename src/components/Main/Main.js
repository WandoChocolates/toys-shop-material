import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.main}></div>
    </React.Fragment>
  );
}
