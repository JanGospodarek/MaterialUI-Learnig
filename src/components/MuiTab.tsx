import { Box, Tab, styled } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgrondColor: theme.status.danger,
}));
export function MuiTab() {
  const [value, setValue] = useState("1");
  function handle(evetn: React.SyntheticEvent, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      {" "}
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handle}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab label="tab one" value="1"></Tab>
              <Tab label="tab two" value="2"></Tab>
              <Tab label="tab three" value="3"></Tab>
            </TabList>
          </Box>
          <TabPanel value="1">Panel1</TabPanel>
          <TabPanel value="2">Panel2</TabPanel>
          <TabPanel value="3">Panel3</TabPanel>
        </TabContext>
      </Box>
      <StyledBox></StyledBox>
    </>
  );
}
