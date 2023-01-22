import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function MuiDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
