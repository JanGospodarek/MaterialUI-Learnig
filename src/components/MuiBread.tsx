import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export function MuiBread() {
  return (
    <Box m={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon></NavigateNextIcon>}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Features</Link>
        <Link href="#">Features2</Link>
        <Typography color="text.primary"></Typography>
      </Breadcrumbs>
    </Box>
  );
}
