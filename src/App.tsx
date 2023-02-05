import { Stack, createTheme, colors, ThemeProvider } from "@mui/material";
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
import { MuiLink } from "./components/MuiLink";
import { MuiBread } from "./components/MuiBread";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiSpeed } from "./components/MuiSpeed";
import { MuiBottomNav } from "./components/MuiBottomNav";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiList } from "./components/MuiList";
import { MuiChip } from "./components/MuiChip";
import { MuiTable } from "./components/MuiTable";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiDial } from "./components/MuiDialog";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiLoadingBtn } from "./components/MuiLoadingBtn";
import { MuiTab } from "./components/MuiTab";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
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
        {/* <MuiNavbar></MuiNavbar> */}
        {/* <MuiLink></MuiLink>
    <MuiBread></MuiBread> */}
        {/* <MuiDrawer></MuiDrawer>
    <MuiSpeed></MuiSpeed>
    <MuiBottomNav></MuiBottomNav> */}
        {/* <MuiAvatar></MuiAvatar> */}
        {/* <MuiList></MuiList> */}
        {/* <MuiChip></MuiChip>
    <MuiTable></MuiTable>
    <MuiSnackbar></MuiSnackbar> */}
        {/* <MuiDial></MuiDial> */}
        {/* <MuiSkeleton></MuiSkeleton> */}
        {/* <MuiLoadingBtn></MuiLoadingBtn> */}
        <MuiTab></MuiTab>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
