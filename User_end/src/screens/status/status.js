import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./none.svg";
import styled from "styled-components"

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

function Status(){
    let navigate = useNavigate()
    const inputProps = useInput();
    return (
        <Box
      sx={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
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
                  "To check status of an FIR click here",
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
              marginTop:"70px",
          
              height: "75%",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundRepeat:"none",
              // border: '2px solid black',
              backgroundPosition: "left",
            }}
          >
          
          </div>
        </Grid>
        <StyledInput {...inputProps} placeholder="Enter FIR No."/>
        <Btn onClick={() => navigate("/status")}>SUBMIT</Btn>
      </Grid>
    </Box>
    );
}
const Btn = styled.button`
  color: black;
  font-weight: 700;
  background-color: #FC724D; 
  padding: 2px 25px 2px 25px;
  border-radius: 30px;
  margin: 10px 5px 0px 65px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

export default Status;