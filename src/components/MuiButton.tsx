import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";
export function MuiButton() {
  const [formats, setFormats] = useState<string | null>(null);
  console.log(formats);

  function handleFormatChange(
    _event: React.MouseEvent<HTMLElement>,
    updatedFormts: string | null
  ) {
    setFormats(updatedFormts);
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          S
        </Button>
        <Button variant="contained" size="medium">
          M
        </Button>
        <Button variant="contained" size="large">
          L
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon></SendIcon>}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon></SendIcon>}
          disableElevation
          disableRipple
        >
          Send
        </Button>
        <IconButton aria-label="send" color="info" size="small">
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="warning"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
