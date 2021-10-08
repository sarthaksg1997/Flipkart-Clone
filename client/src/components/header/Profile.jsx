import React, { useState } from "react";
import { Typography, Menu, MenuItem } from "@material-ui/core";


const Profile = ({ afterLogin, setAfterLogin }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
      setAfterLogin('')
      setOpen(false);
  }

  return (
    <>
      <Typography onClick={handleClick} style={{cursor:'pointer'}}>{afterLogin}</Typography>
      <Menu style={{marginTop:30}} anchorEl={open} open={open} onClose={handleClose}>
        <MenuItem onClick={logout}>  Logout </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
