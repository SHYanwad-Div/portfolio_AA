// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";

/* Header with NavLink-based MUI Buttons; .active gets applied by NavLink */
export default function Header() {
  const linkSx = {
    color: "inherit",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    "&.active": {
      fontWeight: 700,
      borderBottom: "2px solid rgba(255,255,255,0.9)",
    },
    "& .MuiButton-startIcon": { mr: 0.5 }
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AeroAspire — Portfolio
          </Typography>

          <Box>
            <Button component={NavLink} to="/" end sx={linkSx} startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button component={NavLink} to="/add" sx={linkSx} startIcon={<AddIcon />} >
              Add Task
            </Button>
            <Button component={NavLink} to="/about" sx={linkSx} startIcon={<InfoIcon />} >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* spacer to prevent AppBar overlap */}
      <Toolbar />
    </>
  );
}
