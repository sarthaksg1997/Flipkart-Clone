import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem";
import { removeItemsFromCart } from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";
import RightPart from "./RightPart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm.js";

const useStyle = makeStyles(theme=>({
  body: {
    background: "#f1f3f6",
    fontSize: "14px",
  },
  cart: {
    marginTop: 55,
    padding: "30px 135px",
     [theme.breakpoints.down("md")]:{
       padding:'15px 15px'
     },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  leftPart: {
    // width: "67%",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrderBtn: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
  rightPart: {},
}));

const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.addToCart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const removeItemFromCart = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 550,
      email: "sarthakg662@gmail.com",
    }); 

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.cart}>
          <Grid item lg={9} md={9} sm={12} xs={12}className={classes.leftPart}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => {
              return (
                <CartItem item={item} removeItemFromCart={removeItemFromCart} />
              );
            })}
            <Box className={classes.bottom}>
              <Button variant="contained" className={classes.placeOrderBtn} onClick={buyNow}>
                Place Your Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
          <RightPart cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
