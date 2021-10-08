import React from 'react';
import { imageURL } from '../../constants/data';
import { Box, Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme=>({
    item: {
        [theme.breakpoints.down('sm')]:{
            height:280
        },
         [theme.breakpoints.down('xs')]:{
             height:200
         }
    },
    img: {
        width: '99.6%',
        [theme.breakpoints.down('sm')]:{
            height:275,
        },
        [theme.breakpoints.down('xs')]:{
            height:195,
        }
    }
}));

const Midsection = () => {
    const classes = useStyle();
    return (
        <>
            <Grid container lg={12} md={12} sm={12} xs={12}  >
                {imageURL.map((image, i) => (
                    <Grid item lg={4} md={4} sm={12} xs={12} className={classes.item}>
                     <img src={image} alt="" key={i} className={classes.img} />
                     </Grid>
                ))
                }

            </Grid>
        </>
    )
}

export default Midsection
