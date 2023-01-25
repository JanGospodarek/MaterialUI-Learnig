import { Stack, Chip, Avatar } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

export function MuiChip() {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);
  function handleDelete(chip: string) {
    setChips((chips) => chips.filter((el) => el !== chip));
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary"></Chip>
      <Chip label="Chip" color="primary" variant="outlined"></Chip>
      <Chip
        label="Chip"
        color="primary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      ></Chip>
      <Chip
        label="Chip"
        color="primary"
        variant="outlined"
        icon={<MailIcon></MailIcon>}
      ></Chip>
      <Chip
        label="Click"
        color="success"
        icon={<MailIcon></MailIcon>}
        onClick={() => {
          alert("wow!");
        }}
      ></Chip>
      <Chip
        label="Delete"
        color="error"
        icon={<MailIcon></MailIcon>}
        onClick={() => {
          alert("wow!");
        }}
        onDelete={() => {
          alert("nmie usuwaj mn");
        }}
      ></Chip>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => {
            handleDelete(chip);
          }}
        ></Chip>
      ))}
    </Stack>
  );
}
