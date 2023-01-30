import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
export function MuiDial() {
  const [open, setOpen] = useState(false);
  function handle() {
    setOpen(false);
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={handle}>
        <DialogTitle>Submit?</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you suer?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle}>Cancel</Button>
          <Button onClick={handle}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
