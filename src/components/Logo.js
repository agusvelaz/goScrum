import { Box, Typography } from "@mui/material";
export default function Logo() {
  return (
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: "flex", margin: "0 5px 0 5px",  fontWeight:'bold' }}
        color="#fff"
      >
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ display: "flex", fontWeight:'bold' }}
          color="secondary.main"
        >
          Go
        </Typography>
        Scrum
      </Typography>
  );
}
