import React from 'react'
import {navData} from '../../constants/data';
import { Box,Typography,makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme=>({
container:{
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 54,
    background: '#fff',
    padding: '16px 0',
    overflowX: 'overlay',
     [theme.breakpoints.down('md')]: {
         marginTop: '54px'
     }
},
box:{
    textAlign: 'center',
},
img:{
    width: 65,
},
text:{
    fontSize: 14,
    fontWeight: 600,
}
}))

const Navbar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            {navData.map((data, i) => {
                return(
                <Box className={classes.box} key={i} >
                    <img src={data.url} className={classes.img} alt="" />
                    <Typography className={classes.text}> {data.text} </Typography>
                </Box>
                )
            })}
        </Box>
    )
}

export default Navbar
