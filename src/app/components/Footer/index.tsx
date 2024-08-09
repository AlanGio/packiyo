import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[200],
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        color="primary"
        style={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            © {new Date().getFullYear()} Order Management. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
