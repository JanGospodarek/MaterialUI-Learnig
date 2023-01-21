import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
export function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            necessitatibus, omnis fuga unde placeat vitae aspernatur suscipit
            voluptatem eveniet similique sint ipsa, consequuntur id illo quis
            provident fugiat officiis quos! Quasi dolorem possimus ratione
            dignissimos architecto excepturi autem non reprehenderit
            consequuntur dicta veniam incidunt libero a tempore quos, nobis
            beatae molestias sint officiis! Incidunt cumque animi optio qui nemo
            earum. Quasi, consequuntur! Totam dignissimos assumenda voluptatum
            eum facilis, maxime quibusdam deleniti veritatis! Minima harum
            similique, animi optio cupiditate nemo laboriosam aspernatur magnam.
            At ratione corrupti laudantium, quis voluptatum illo dicta?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Size</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
