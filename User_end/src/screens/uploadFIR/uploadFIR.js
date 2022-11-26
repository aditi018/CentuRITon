import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React , {useState} from "react";
import Typewriter from "typewriter-effect";
import Image from "./upload.png";
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

const StyledInput1 = styled.input`
  color: black;
  width: 23rem;
  height: 3rem;
  alignitems: center;
  padding: 5px;
  padding-left: 12px;
  border-radius: 6px;
  margin: 5px;
  border: 1px solid lightblue;
`;

const StyledInput2 = styled.input`
  color: black;
  width: 23rem;
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
  
function UploadFIR()
{   let navigate = useNavigate();
    const inputProps = useInput();
    return(
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
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Grid
          item
          xl={6}
          sx={{
            display: "flex",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledInput1 {...inputProps} placeholder="Enter complaintant's name" required />
          <StyledInput1 {...inputProps} placeholder="Enter complaintant's address" required/>
          <StyledInput1 {...inputProps} placeholder="Date and time of occurence of crime" required/>
          <StyledInput1 {...inputProps} placeholder="Enter accused name if known" />
          <StyledInput2 {...inputProps} placeholder="Enter accused address" />
          <StyledInput2 {...inputProps} placeholder="Description of the crime" required/>
          <Btn onClick={() => navigate("/status")}>Register an online complaint</Btn>
        </Grid>
        <Grid
          item
          xl={6}
          sx={{
            display: "block",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${Image}`}
            alt="abhi aaegi image"
            style={{ width: "30rem", height: "30rem" }}
          />
        </Grid>
      </Grid>
    </Box>
    )
}

export default UploadFIR;