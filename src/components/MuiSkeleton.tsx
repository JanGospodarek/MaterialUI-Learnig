import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export function MuiSkeleton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        ></Skeleton>
      ) : (
        <img
          src="https://random.imagecdn.app/256/144"
          width={256}
          height={144}
        ></img>
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          ></Skeleton>
        ) : (
          <Avatar>V</Avatar>
        )}
      </Stack>
      <Stack sx={{ width: "80%" }}>
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave"></Skeleton>
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave"></Skeleton>
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">React dupa dupa da</Typography>
            <Typography variant="body2">React dupa dupa da</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
}
