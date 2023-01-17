import { Stack } from "@mui/system";
import React from "react";
import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "./components/TextField";
import { MuiRadio } from "./components/MuiRadio";
import { MuiCheckbox } from "./components/MuiCheckbox";
function App() {
  return (
    <Stack className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiSelect></MuiSelect> */}
      {/* <MuiRadio></MuiRadio> */}
      <MuiCheckbox></MuiCheckbox>
    </Stack>
  );
}

export default App;
