import { Box, FormControlLabel, Switch } from "@mui/material";

export function MuiSwitch() {
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch></Switch>}
      ></FormControlLabel>
    </Box>
  );
}
