import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from "../../constants/data";
import {Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme=>({
    container: {
     padding:' 8px 0 0',
    },
img:{
    width: '100%',
    height: 280,
    [theme.breakpoints.down('sm')]:{
        objectFit: 'cover',
        height:180
    }
},
}))

const Banner = () => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
          <Carousel
            animation= 'slide'
            indicators= {false}
            navButtonsAlwaysVisible= {true}
          >
            {
                bannerData.map( (image, i) => {
                    return(
                        <>
                        <img src={image} key={i} className={classes.img} alt="" />
                        </>
                        )
            })
        }
        </Carousel>  
        </Box>
    )
}

export default Banner
