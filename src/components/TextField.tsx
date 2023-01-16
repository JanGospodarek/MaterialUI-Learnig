import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
export function MuiTextField() {
  const [val, setVal] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          color="warning"
        />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          value={val}
          onChange={(e) => setVal(e.target.value)}
          error={!val}
          helperText={!val ? "Required" : "Do not share"}
          label="Password"
          type="password"
          required
        />
        <TextField
          label="ReadOnly"
          type="password"
          helperText="no sieeeema"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
}
