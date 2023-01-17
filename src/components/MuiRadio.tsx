import { Box,FormControl,FormLabel,FormHelperText,FormControlLabel,RadioGroup,Radio } from "@mui/material";
import React, { useState } from "react";

export function MuiRadio(){
    const [value,setValue]=useState("")
    console.log(value);
    
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setValue(event.target.value)
    }
    return <Box>
        <FormControl error>
            <FormLabel id="job-exp-label">
                Years of exp
            </FormLabel>
            <RadioGroup name="job-exp" aria-labelledby="job-exp-label" value={value} row onChange={handleChange}>
            <FormControlLabel control={<Radio size="small" color="info"/> }label='0-2' value='0-2'></FormControlLabel>
            <FormControlLabel control={<Radio/> }label='3-5' value='3-5'></FormControlLabel>
            <FormControlLabel control={<Radio/> }label='6-10' value='6-10'></FormControlLabel>
            </RadioGroup>
            <FormHelperText>Invlalid Selection</FormHelperText>
        </FormControl>
    </Box>
}