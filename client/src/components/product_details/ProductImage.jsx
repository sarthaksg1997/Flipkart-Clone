import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api.js";
import { post } from "../../utils/paytm.js";

const useStyle = makeStyles(theme=>({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "6px 0 0 44px",
    [theme.breakpoints.down('sm')]:{
      width:'60%',
      margin:'0 20%',
      padding:0,
    },
    [theme.breakpoints.down('xs')]:{
      width:'70%',
      marginLeft:'10%',
      padding:0,
    }
  },
  image: {
    padding: "60px 48px", 
    width: "90%",
    // [theme.breakpoints.down('sm')]:{
    //   width:'50%',
    //   padding: "30px 24px",
    // }
  },
  buttons: {
    display: "flex",

    "& > *": {
      height: 50,
      width: "46%",
      color: "#fff",
      borderRadius: 1,
      marginRight: 10,
    },
  },
  addCartBtn: {
    background: "#ff9f00",
  },
  buyNowBtn: {
    background: "#fb641b",
  },
}));

const ProductImage = ({ product }) => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const history = useHistory();

  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
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
      <Box className={classes.container}>
        <img className={classes.image} src={product.detailUrl} alt="" />
        <Box className={classes.buttons}>
          <Button
            onClick={addItemToCart}
            variant="contained"
            className={classes.addCartBtn}
          >
            {" "}
            <Cart fontSize="small" /> Add to cart{" "}
          </Button>
          <Button
            variant="contained"
            className={classes.buyNowBtn}
            onClick={buyNow}
          >
            {" "}
            <Flash fontSize="small" /> Buy Now{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductImage;
