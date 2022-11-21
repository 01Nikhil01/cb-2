import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HttpsIcon from "@mui/icons-material/Https";
import logo from "../assets/logo.png";

function NavbarComp() {
  return (
    <AppBar
      position="static"
      sx={{ pl: 2, bgcolor: "inherit", boxShadow: "0 1px 10px 1px #c3bfbf8a" }}
    >
      <Container disableGutters maxWidth="xl">
        <Toolbar disableGutters pt={0}>
          <img src={logo} width={300} sx={{ ml: 2 }} alt="logo" />

          <Box sx={{ flexGrow: 1, display: "flex", ml: 3 }}>
            <Button
              sx={{
                my: 2,
                mr: 1,
                display: "block",
                color: "#25252595",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Jobs
            </Button>
            <Button
              sx={{
                my: 2,
                mr: 1,
                display: "block",
                color: "#25252595",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Salaries & Advice
              <KeyboardArrowDownIcon
                sx={{ color: "#000000", verticalAlign: "middle" }}
              />
            </Button>
            <Button
              sx={{
                my: 2,
                mr: 1,
                display: "block",
                color: "#25252595",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Recommended Jobs
              <HttpsIcon
                sx={{ fontSize: "1.2rem", verticalAlign: "baseline", pl: 0.5 }}
              />
            </Button>
            <Button
              sx={{
                my: 2,
                mr: 1,
                display: "block",
                color: "#25252595",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              My Messages
              <HttpsIcon
                sx={{ fontSize: "1.2rem", verticalAlign: "baseline", pl: 0.5 }}
              />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="text"
              sx={{
                color: "#25252595",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              <Typography>Ben</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarComp;
