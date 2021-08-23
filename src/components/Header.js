import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  appBar: {
    boxShadow: "none",
  },
  infoTopGrid: {
    width: "100%",
    backgroundColor: alpha(theme.palette.common.white, 0.7),
    padding: "1em 2em",
    marginRight: theme.spacing(2)
  },
  infoContactAgile: {
    display: "flex",
    flexGrow: 1
  },
  title: {
    display: "flex",
    marginRight: theme.spacing(2),
    "& span": {
      fontSize: "20px",
      color: "#ea1d5d",
      marginRight: "12px"
    }
  },
  p: {
    fontSize: "14px",
    color: "#000",
    "& a": {
      fontSize: "14px",
      color: "#000",
      "&:hover": {
        color: "#fff"
      }
    }
  },
  containerFluid: {
    width: "100%"
  },
  hedderUp: {
    background: "#000",
    display: "flex"
  },
  cartIcons: {
    display: "flex"
  },
  navbar: {
    display: "flex"
  },
  navbarCollapse: {
    display: "flex"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.appBar}>
          <div className={classes.infoTopGrid}>
            <div className={classes.infoContactAgile}>
              <Typography className={classes.title}>
                <span class="fas fa-phone-volume"></span>
                <p className={classes.p}>+(000)123 4565 32</p>
              </Typography>
              <Typography className={classes.title}>
                <span class="fas fa-envelope"></span>
                <p className={classes.p}>
                  <a href="mailto:info@example.com">info@example1.com</a>
                </p>
              </Typography>
            </div>
          </div>
          <div className={classes.containerFluid}>
            <div className={classes.hedderUp}>
              <div class="col-lg-3 col-md-3 logo-head">
                <h1>
                  <a class="navbar-brand" href="index.html">
                    Toys-Shop
                  </a>
                </h1>
              </div>
              <div class="col-lg-5 col-md-6 search-right">
                <form class="form-inline my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div class="col-lg-4 col-md-3 right-side-cart">
                <div className={classes.cartIcons}>
                      <span class="far fa-heart"></span>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        {" "}
                        <span class="far fa-user"></span>
                      </button>
                    <div class="toyscart toyscart2 cart cart box_1">
                      <form action="#" method="post" class="last">
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="display" value="1" />
                        <button
                          class="top_toys_cart"
                          type="submit"
                          name="submit"
                          value=""
                        >
                          <span class="fas fa-cart-arrow-down"></span>
                        </button>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <nav className={classes.navbar}>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className={classes.navbarCollapse}>
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/service" class="nav-link">
                    Service
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/shop" class="nav-link">
                    Shop Now
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="nav-link" to="/icon">
                      404 Page
                    </Link>
                    <Link class="nav-link " to="/typography">
                      Typography
                    </Link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Product
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="nav-link" to="/product">
                      Kids Toys
                    </Link>
                    <Link class="nav-link " to="/product">
                      Dolls
                    </Link>
                    <Link class="nav-link " to="/product">
                      Key Toys
                    </Link>
                    <Link class="nav-link " to="product">
                      Boys Toys
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">
                    Contact
                  </Link>
                </li>
            </div>
          </nav>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
