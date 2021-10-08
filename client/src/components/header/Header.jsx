import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
  IconButton,
  Drawer,
  ListItem,
  List
} from "@material-ui/core";
import { Link } from "react-router-dom";

// COMPONENTS
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
import {  Menu } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  menuBtn: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  list: {
    width: 200,
    height:'100vh',
    background:'#2874f0'
  },
  logo: {
    width: 75,
  },
  subLogo: {
    width: 10,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    lineHeight: 0,
    marginLeft: "12%",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
    textDecoration: "none",
    color: "#fff",
  },
  headerBtns: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const list = () => (
    <Box className={classes.list}>
      <List>
        <ListItem >
          <HeaderButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar className={classes.header}>
        <ToolBar>
          <IconButton
            onClick={handleOpen}
            color="inherit"
            className={classes.menuBtn}
          >
            <Menu />
          </IconButton>

          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>

          <Link to="/" className={classes.component}>
            <img src={logoURL} alt="" className={classes.logo} />
            <Box className={classes.container}>
              <Typography className={classes.subHeading}>
                Explore plus
              </Typography>
              <img src={subURL} alt="" className={classes.subLogo} />
            </Box>
          </Link>
          <SearchBar />
          <span className={classes.headerBtns}>
            <HeaderButtons />
          </span>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Header;
