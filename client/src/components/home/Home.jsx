import { Box, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import Midsection from "./Midsection";


import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
 import { getProducts as listProducts } from "../../redux/actions/productActions";

const useStyle = makeStyles(theme=>({
  slideAd: {
    display: "flex",
  },
  slideBox:{
    width:'83%',
    [theme.breakpoints.down("md")]:{
      width:'100%',
    }
  },
  adBox: {
    width: "17%",
    margin: "15px 0 0 9.8px",
    height: 360,
    [theme.breakpoints.down("md")]:{
      display: 'none'
    }
  },
  adImg: {
    width: 241,
    border: "3px solid #ffffff",
    height: "100.5%",
    
  },
}));


const Home = () => {
    const classes = useStyle();
    const adURL ="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

     const { products } = useSelector((state) => state.getProducts)
    
     const dispatch = useDispatch();
    
     useEffect(() => {
       dispatch(listProducts());
     }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box style={{ background: "#f1f3f6", padding: 8 }}>
        <Banner />
        <Box className={classes.slideAd}>
          <Box className={classes.slideBox}>
            <Slide products={products} title="Deals of the day" timer={true} />
          </Box>
          <Box className={classes.adBox}>
            <img src={adURL} alt="" className={classes.adImg} />
          </Box>
        </Box>
        <Midsection />
        <Slide products={products} title="Trending offers" timer={false} />
        <Slide products={products} title="Suggested for you" timer={false} />
        <Slide products={products} title="New Arrivals" timer={false} />
        <Slide products={products} title="Sports collection" timer={false} />
      </Box>
    </>
  );
};

export default Home;
