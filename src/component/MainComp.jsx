import {
  Grid,
  Box,
  Typography,
  InputLabel,
  Input,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";

function MainComp() {
  return (
    <>
      <Box
        sx={{
          ml: 1.5,
          mt: 1,
          py: 5,
          px: 5,
          width: "60rem",
          boxShadow: "1px 1px 5px 2px rgba(149, 149, 150, 0.252)",
          borderRadius: "5px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography sx={{ fontWeight: "700" }}>2. Work History</Typography>
          </Grid>
          <Grid container>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*Job Title"
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  ml: 1.5,
                  mt: 2,
                  pl: 2.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*Company Name"
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  ml: 4,
                  mt: 2,
                  pl: 2.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                id="FName"
                defaultValue="*Start Date"
                endAdornment=<CalendarMonthIcon
                  sx={{ color: "#6b6c6d", fontSize: "2rem" }}
                />
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  mt: 6,
                  ml: 2,
                  pb: 0.5,
                  pl: 1.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*End Date"
                id="FName"
                endAdornment=<CalendarMonthIcon
                  sx={{ color: "#6b6c6d", fontSize: "2rem" }}
                />
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  mt: 6,
                  ml: 4,
                  pl: 1.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid
              item
              md={12}
              sx={{
                mx: 31,
                mt: 3,
                mb: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: "2rem" } }}
                  />
                }
                label="I Currently Work Here"
              />
            </Grid>
            <Grid item md={12}>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*Job Title"
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  ml: 1.5,
                  mt: 2,
                  pl: 2.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*Company Name"
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  ml: 4,
                  mt: 2,
                  pl: 2.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                id="FName"
                defaultValue="*Start Date"
                endAdornment=<CalendarMonthIcon
                  sx={{ color: "#6b6c6d", fontSize: "2rem" }}
                />
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  mt: 6,
                  ml: 2,
                  pb: 0.5,
                  pl: 1.5,
                }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                defaultValue="*End Date"
                id="FName"
                endAdornment=<CalendarMonthIcon
                  sx={{ color: "#6b6c6d", fontSize: "2rem" }}
                />
                sx={{
                  width: "460px",
                  fontSize: "1.2rem",
                  mt: 6,
                  ml: 4,
                  pl: 1.5,
                  pb: 0.5,
                }}
              />
            </Grid>
            <Grid
              item
              md={12}
              sx={{
                mx: 31,
                mt: 3,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: "2rem" } }}
                  />
                }
                label="I Currently Work Here"
              />
            </Grid>
            <Grid item md={12}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 5,
                  fontSize:"1rem",
                  color: "#6b6c6d",
                  fontWeight: "700",
                }}
              >
                <CloseIcon sx={{ fontWeight: "100" }} />
                Remove this working experience
              </Typography>
            </Grid>
            <Grid item md={12} sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"space-between",
                  ml:1,
                  mt:9
                }}>
                  <Button variant="text" sx={{fontSize:"1rem",textTransform:"none",letterSpacing:"0",wordSpacing:0,fontWeight:"700"}}>Add Another Working Experience</Button>
                  <Button variant="contained" disabled sx={{fontSize:"1rem",fontWeight:"700",py:2,px:3,textTransform:"none"}}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MainComp;
