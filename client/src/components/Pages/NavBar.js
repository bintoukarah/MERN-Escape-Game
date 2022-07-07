import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Logo from "../img/logo_escape.png"
// import SignIn from "./SignIn";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
            <NavLink to="/"  sx={{width: "2rem", height: "2rem", marginRight: "0.5rem"}}>
              <img src={Logo} alt="home"/>
            </NavLink>
          </Typography>
          <Button color="inherit" sx={{ textDecoration:'none',fontWeight :'bold', color:"white" }}><Link to="SignIn">Connection</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}