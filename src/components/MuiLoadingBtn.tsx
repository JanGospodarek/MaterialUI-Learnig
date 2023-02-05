import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
export function MuiLoadingBtn() {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="loading...">
        Fetch
      </LoadingButton>{" "}
      <LoadingButton variant="outlined" loadingIndicator="loading..." loading>
        Fetch
      </LoadingButton>
    </Stack>
  );
}
