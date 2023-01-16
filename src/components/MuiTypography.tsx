import { Typography } from "@mui/material";
export function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        h2 Heading
      </Typography>
      <Typography variant="subtitle1">s1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        consequuntur dignissimos a cum quas porro dolor impedit, quis iure
        perspiciatis sunt dolorem maiores! Natus ipsa ducimus voluptate quasi,
        molestias culpa.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        consequuntur dignissimos a cum quas porro dolor impedit, quis iure
        perspiciatis sunt dolorem maiores! Natus ipsa ducimus voluptate quasi,
        molestias culpa.
      </Typography>
    </div>
  );
}
