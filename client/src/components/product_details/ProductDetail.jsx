import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, makeStyles, Table, TableBody, TableRow, TableCell,Grid } from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";
import clsx from "clsx";

import ProductImage from './ProductImage';

import { getProductDetails } from "../../redux/actions/productActions";

const getStyle = makeStyles(theme=>({
  component: {
    marginTop: 55,
    background: "#f2f2f2",
  },
  container: {
    margin: '0 80px',
    display: "flex",
    background: "#fff",
    [theme.breakpoints.down('md')]:{
      margin:0,
    },
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
    },
  },
  productImage: {
    minWidth: "40%",
  },
  productDetail: {
    marginTop: 30,
    paddingLeft: 20,
    "& > *": {
      marginBottom: 10,
    },
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
  ratingBar: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#878787",
  },
  priceBar: {
    display: "flex",
    alignItems: "center",
  },
  bankOffersText: {
    "& > *": {
      fontSize: 14,
      marginTop: 10,
      display: "flex",
      alignItems: "center",
    },
  },
  badge: {
    marginRight: 10,
    color: "#00CC00",
    fontSize: 15,
  },
}));

const ProductDetail = ({ match }) => {
  const classes = getStyle();

  const date = new Date(new Date().getTime() + (5*24*60*60*1000));

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    
    const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  return (
    <>
      <Box className={classes.component}>
        {product && Object.keys(product).length && (
          <Box  className={classes.container}>
            <Box className={classes.productImage}>
                <ProductImage product={product} />
            </Box>
            <Box className={classes.productDetail}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography className={classes.ratingBar}>
                7 Ratings and 2 Reviews
                <span>
                  <img
                    src={fassured}
                    alt=""
                    style={{ width: 77, margin: "5px 0 0 20px" }}
                  />
                </span>
              </Typography>
              <Typography className={classes.priceBar}>
                <span style={{ fontSize: 25 }}>
                  {" "}
                  &#8377;{product.price.cost}{" "}
                </span>
                &nbsp; &nbsp; &nbsp;
                <span
                  className={clsx(classes.smallText, classes.greyTextColor)}
                >
                  <strike> &#8377;{product.price.mrp} </strike>
                </span>
                &nbsp; &nbsp; &nbsp;
                <span style={{ color: "#388E3C", fontSize: "14px" }}>
                  {" "}
                  {product.price.discount} off{" "}
                </span>
              </Typography>
              <Typography style={{marginTop:20}}><strong>Available offers</strong></Typography>
              <Box className={classes.bankOffersText}>
                <Typography>
                  <Badge className={classes.badge} />
                  Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                  Card
                </Typography>
                <Typography>
                  <Badge className={classes.badge} />
                  Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                  first time transaction, Terms and Condition apply
                </Typography>
                <Typography>
                  <Badge className={classes.badge} />
                  Purchase this Furniture or Appliance and Get Extra ₹500 Off on
                  Select ACs
                </Typography>
                <Typography>
                  <Badge className={classes.badge} />
                  Partner OfferExtra 10% off upto ₹500 on next furniture
                  purchase
                </Typography>
              </Box>

              <Table>
                  <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell>Delivery by <strong>{date.toDateString()}</strong></TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor} style={{verticalAlign: "baseline"}}>Seller</TableCell>
                        <TableCell className={classes.smallText} >
                            <Typography style={{ color: '#2874f0' }}>SuperComNet</Typography>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} ><img src={sellerURL} alt="" style={{width :390}} /></TableCell>                        
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                  </TableBody>
              </Table>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProductDetail;
