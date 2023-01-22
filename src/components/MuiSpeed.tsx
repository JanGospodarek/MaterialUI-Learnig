import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
export function MuiSpeed() {
  return (
    <SpeedDial
      ariaLabel="Navigation"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<CopyIcon />}
        tooltipTitle="Copy"
      ></SpeedDialAction>{" "}
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
      ></SpeedDialAction>{" "}
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
      ></SpeedDialAction>
    </SpeedDial>
  );
}
