import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon></MailIcon>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="wow!"></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem>
          <ListItemIcon>
            <MailIcon></MailIcon>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="wow!"></ListItemText>
        </ListItem>
        <Divider></Divider>

        <ListItem>
          <ListItemIcon>
            <MailIcon></MailIcon>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="wow!"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
