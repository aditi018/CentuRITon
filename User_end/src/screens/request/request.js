import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./none.svg";
import styled from "styled-components";

function Request() {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
        paddingLeft: 15,
      }}
    >
      <Grid container sx={{ width: "100vw", height: `calc(100vh - 75px)` }}>
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              fontWeight: 700,
              fontSize: "50px",
              letterSpacing: "2px",
            }}
          >
            To file an E-FIR click here
            <br></br>
            <Btn
              onClick={() => navigate("/uploadfir")}
              style={{ width: 199, height: 35, fontSize: 19 }}
            >
              File an E-FIR
            </Btn>
          </Typography>
        </Grid>
        <Grid item xl={6} sx={{ display: "inline", justifyContent: "center" }}>
          <div
            style={{
              marginTop: "px",

              height: "55%",
              width: "38%",
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
const Btn = styled.button`
  color: black;
  font-weight: 700;
  background-color: #fc724d;
  padding: 2px 25px 2px 25px;
  border-radius: 30px;
  margin: 10px 5px 0px 65px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default Request;
