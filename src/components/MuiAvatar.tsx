import { Box, Stack, Avatar, AvatarGroup, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar variant="rounded" sx={{ backgroundColor: "primary.light" }}>
          NW
        </Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          {" "}
          <Avatar sx={{ backgroundColor: "primary.light" }}>NW</Avatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
          <Avatar src="https://randomuser.me/api/portraits/men/80.jpg"></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={5} color="primary">
          <MailIcon></MailIcon>
        </Badge>
      </Stack>
    </Stack>
  );
}
