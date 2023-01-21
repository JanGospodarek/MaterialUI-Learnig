import { Stack } from "@mui/system";
import React from "react";
import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "./components/TextField";
import { MuiRadio } from "./components/MuiRadio";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiBox } from "./components/MuiBox";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiImageList } from "./components/MuiImageList";
import { MuiNavbar } from "./components/MuiNavbar";
function App() {
  return (
    <Stack className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiSelect></MuiSelect> */}
      {/* <MuiRadio></MuiRadio> */}
      {/* <MuiCheckbox></MuiCheckbox> */}
      {/* <MuiSwitch></MuiSwitch> */}
      {/* <MuiBox></MuiBox> */}
      {/* <MuiCard></MuiCard> */}
      {/* <MuiAccordion></MuiAccordion> */}
      {/* <MuiImageList></MuiImageList> */}
      <MuiNavbar></MuiNavbar>
    </Stack>
  );
}

export default App;
