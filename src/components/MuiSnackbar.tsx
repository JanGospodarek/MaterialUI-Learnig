import { Alert, AlertProps, Box, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

export function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
      return <Alert elevation={6} ref={ref} {...props}></Alert>;
    }
  );
  function handle(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="submited"
        autoHideDuration={3000}
        open={open}
        onClose={handle}
      ></Snackbar> */}
      <Snackbar autoHideDuration={3000} open={open} onClose={handle}>
        <SnackbarAlert onClose={handle} severity="success">
          Form submitted
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}
