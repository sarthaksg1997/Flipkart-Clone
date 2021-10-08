import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';

import { makeStyles, Box, Typography,Button, Divider } from '@material-ui/core'
import Countdown from 'react-countdown';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles(theme=>({
  container: {
    background: '#fff',
     margin:'15px 0',
     [theme.breakpoints.down('sm')]:{
       
     }
  },
  heading: {
    display: "flex",
    padding: 15,
    alignItems: 'center',

  },
  headingText:{
    fontSize:22,
    fontWeight: 600,
    marginRight:8
  },
  clockImg: {
    width: 22,
    margin: '0 6px'
  },
  timer:{
    color: '#7f7f7f'
  },
  button:{
    fontSize:13,
    backgroundColor: '#2874f0',
    borderRadius: 2,
    marginLeft: 'auto'
  },
  multiCarousel:{
    padding:28,
    [theme.breakpoints.down('sm')]:{
       padding:18
    }
  },
  product:{
    padding: '0 5px',
  },
  img:{
    height:130,
  },
  details:{
    marginTop:30,
    [theme.breakpoints.down('sm')]:{
       marginTop:15
    }
  },
  shortTitle:{
    fontSize: 16,
    fontWeight: 600,
    
  },
  discount:{
    fontSize:14,
    color: 'green',
    margin: 4
  },
  tagline:{
    fontSize:14,
    opacity: 0.6
  }

}));

const Slide = ({title,timer,products}) => {
  const classes = useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left </span>;
  }

  return (
    <Box className={classes.container} >
      <Box className={classes.heading}>
        <Typography className={classes.headingText}>{title}</Typography>
        { timer?
        <>
        <img src={timerURL} alt="" className={classes.clockImg} />
        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}  />
        </> :''}
        <Button variant='contained' color='primary' className={classes.button}>VIEW ALL</Button>
      </Box>
      <Divider/>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={false}
        autoPlay={false}
       className={classes.multiCarousel}
      >
        {products.map((product) => {
          return (
            <Link to = {`/product/${product.id}`}>
            <Box key={product.id} textAlign='center' className={classes.product}>
              <img src={product.url} alt="" className={classes.img} />
              <Box className={classes.details}>
              <Typography className={classes.shortTitle}>{product.title.shortTitle}</Typography>
              <Typography className={classes.discount}>{product.discount}</Typography>
              <Typography className={classes.tagline}>{product.tagline}</Typography>
              </Box>
            </Box>
            </Link>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default Slide;
