import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {useSelector} from 'react-redux';

import Profile from "./Profile";
import LoginDialog from "../login/Login";
import {LoginContext} from "../../context/ContextProvider";

const useStyle = makeStyles(theme=>({
  wrapper: {
    margin: "0 5% 0 20%",
    width:'20%',
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      margin:'auto',
      
    },
    "& > *": {
      color: "#fff",
      textDecoration: "none",
      marginRight: 50,
      [theme.breakpoints.down('sm')]:{
        margin: '15px 0 0 0 '
      }
    },
  },
  login: {
    background: "#fff",
    textTransform: "none",
    color: "#2874f0",
    borderRadius: 2,
    padding: "5px 40px",
    fontWeight: 600,
  },
  cartContainer: {
    display: "flex",
  },
}));

const HeaderButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { afterLogin, setAfterLogin} = useContext(LoginContext);

  const {cartItems} = useSelector(state=> state.addToCart)

  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={classes.wrapper}>
        {afterLogin? <Profile afterLogin={afterLogin} setAfterLogin={setAfterLogin} /> :
        <Link>
          <Button
            variant="contained"
            className={classes.login}
            onClick={openLoginDialog}
          >
            Login
          </Button>
        </Link>
        }
        <Link>
          <Typography>More</Typography>
        </Link>
        <Link to="/cart" className={classes.cartContainer}>
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: 9 }}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} setAfterLogin={setAfterLogin} />
      </Box>
    </>
  );
};

export default HeaderButtons;
