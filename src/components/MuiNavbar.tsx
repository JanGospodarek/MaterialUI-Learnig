import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Stack } from "@mui/material";
import React, { useState } from "react";
export function MuiNavbar() {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const openB = Boolean(open);
  function handle(event: React.MouseEvent<HTMLButtonElement>) {
    setOpen(event.currentTarget);
  }
  function handleClose() {
    setOpen(null);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CatchingPokemonIcon></CatchingPokemonIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Features</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handle}
            aria-controls={openB ? "res-main" : undefined}
            aria-haspopup="true"
            aria-expanded={openB ? "true" : undefined}
          >
            Open Menu
          </Button>
        </Stack>
        <Menu
          id="reqource-menu"
          anchorEl={open}
          open={openB}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Blog2</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
