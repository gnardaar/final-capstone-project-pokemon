// import { constants } from 'crypto'
import React, { Suspense } from "react";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core";
import "material-ui-core";
import { Link } from "react-router-dom";
// import { AuthCheck } from 'reactfire'

const useStyles = makeStyles({
  logo: {
    // content: `url(${Digits})`,
    maxWidth: "20%",
    height: "auto",
  },
  navlogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  navbar: {
    backgroundImage: " linear-gradient(to right, green, gold,brown, red,blue)",
    zIndex: 1,
    borderBottom: "1px solid grey",
  },
  navbarItem: {
    fontSize:'2rem',
    color: "white",
    textDecoration: "none",
  },
  p5: {
    padding: "5px",
  },
  spaceBetween: {
    justifyContent: "space-between",
    marginRight: "20px",
  },
  alignCenter: {
    alignItems: "center",
  },
  ul: {
    listStyleType: "none",
  },
  width60: {
    width: "60%",
  },
  width100: {
    width: "100%",
  },
  psides: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}
    >
      {/* <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                    </Link>
            </div> */}
      <div className={`${classes.width60} ${classes.alignCenter}`}>
        <ul
          className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}
        >
          <Suspense fallback={"loading..."}>
            {/* <AuthCheck fallback={ */}
            <li>
              <Link
                to="/about"
                className={`${classes.navbarItem} ${classes.psides}`}
              >
                {" "}
                about me
              </Link>
            </li>
            {/* }> */}
            <li>
              <Button>
                <Link
                  to="/pokemon"
                  className={`${classes.navbarItem} ${classes.psides}`}
                >
                  My Poke-Dex
                </Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link
                  to="Contact"
                  className={`${classes.navbarItem} ${classes.psides}`}
                >
                  Contact Me
                </Link>
              </Button>
            </li>
            {/* </AuthCheck> */}
          </Suspense>
        </ul>
      </div>
    </div>
  );
};
