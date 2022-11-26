import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./none.svg";

function Landing() {
  return (
    <Box
      sx={{
        width: "95rem",
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginLeft: "4rem",
      }}
    >
      <Grid container sx={{ width: "100vw", height: `calc(100vh - 75px)` }}>
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontWeigh9t: 700,
              fontSize: "50px",
              letterSpacing: "2px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Welcome to the User Portal",
                  "You can check the status of your FIR",
                  "You can also find your nearest police station",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xl={6} sx={{ display: "inline", justifyContent: "center" }}>
          <div
            style={{
              marginTop: "70px",

              height: "32rem",
              width: "23rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundRepeat: "none",
              // border: '2px solid black',
              backgroundPosition: "left",
            }}
          ></div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
