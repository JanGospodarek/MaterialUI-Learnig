import { Stack, Link } from "@mui/material";

export function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" color="secondary" underline="hover">
        link
      </Link>
    </Stack>
  );
}
