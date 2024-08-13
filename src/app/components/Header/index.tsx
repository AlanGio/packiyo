import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import Link from "next/link";

const Header: React.FC = () => (
  <>
    <Head>
      <title>Packiyo Code Challenge. By Alan</title>
    </Head>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Packiyo Management
        </Typography>
        <Box sx={{ "& a": { color: "white", ml: 2, textDecoration: "none" } }}>
          <Link href="/" color="inherit">
            Dashboard
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  </>
);

export default Header;
