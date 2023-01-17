import { Stack, } from "@mui/system";
import { TextField ,Box,MenuItem} from "@mui/material";
import React, { useState } from "react";
export function MuiSelect(){
    
    const [country,setCountry]=useState<string[]>([])
    console.log(country);
    
function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    const value=event.target.value;
    setCountry(typeof value=='string'?value.split(','):value)
}
    return <Box width='250px'>
<TextField label='Select country' select value={country} onChange={handleChange} fullWidth SelectProps={{
    multiple:true
}} size='small' color="warning" helperText='select your country' error>
<MenuItem value='IN'>india</MenuItem>
<MenuItem value='US'>USA</MenuItem>
<MenuItem value='PL'>Poland</MenuItem>
</TextField>
</Box>
}