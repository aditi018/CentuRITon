import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./none.svg";
import styled from "styled-components";

const Btn = styled.button`
  color: black;
  width: 15rem;
  height: 3rem;
  font-weight: 700;
  background-color: #fc724d;
  padding: 5px;
  border-radius: 6px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: #fc740d;
  }
`;

const StyledInput = styled.input`
  color: black;
  width: 15rem;
  height: 4rem;
  alignitems: center;
  padding: 5px;
  padding-left: 12px;
  border-radius: 6px;
  margin: 5px;
  border: 1px solid lightblue;
`;

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

function Status() {
  let navigate = useNavigate();
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
      <Grid
        container
        sx={{
          width: "100vw",
          height: `calc(100vh - 75px)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          <StyledInput {...inputProps} placeholder="Enter FIR No." />
          <Btn onClick={() => navigate("/status")}>SUBMIT</Btn>
        </Grid>
        <Grid item xl={6} sx={{ display: "inline", justifyContent: "center" }}>
          <img
            src="./confirm.jpg"
            alt="kaha gaya image"
            style={{ width: "5rem", height: "5rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Status;
