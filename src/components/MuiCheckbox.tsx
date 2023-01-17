import { Box,Checkbox,FormControl,FormLabel,FormHelperText,FormControlLabel,FormGroup,Radio } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
export function MuiCheckbox(){
    const [skills,setSkills]=useState<string[]>([])
    console.log(skills);
    
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
const index=skills.indexOf(event.target.value)
if(index==-1){
    setSkills((prevState)=>[...prevState,event.target.value])
} 
else{
    setSkills(skills.filter(skill=>skill!==event.target.value))
}   }
    return <Box>
      {/* <Box>
        <FormControlLabel label='I accept terms' control={<Checkbox checked={value} onChange={handleChange}/>}></FormControlLabel>
      </Box>
      <Box><Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={value} onChange={handleChange}></Checkbox></Box>
    */}
    <FormControl> 
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
        <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChange}/>}></FormControlLabel>
        <FormControlLabel label='CSS' control={<Checkbox value='css'checked={skills.includes('css')} onChange={handleChange}/>}></FormControlLabel>
        <FormControlLabel label='JS' control={<Checkbox value='js'checked={skills.includes('js')} onChange={handleChange}/>}></FormControlLabel>

        </FormGroup>
    </FormControl>
    </Box>
}