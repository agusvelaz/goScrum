import { Box, Button, Typography } from "@mui/material";
const card = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  border: ".5px solid #ffffff1c",
  position: "relative",
  padding: 2,
  m: 1,
  wordBreak: "break-all",
};
const close = {
  right: 12,
  top: 10,
  position: "absolute",
};

export default function TaskCard({
  data: { title, dateTime, creator, description, type, priority },
}) {
  const limitString = (str) => {
    // let str = String(text);
    console.log(str.length);
    if (str.length > 150) {
      return { string: str.slice(0, 150).concat("..."), addButton: true };
    }
    return { string: str, addButton: false };
  };
  return (
    <Box sx={card}>
      <Box sx={close}>X</Box>
      <Box>
        <h3>{title}</h3>
        <h6>{dateTime}</h6>
        <h5>{creator}</h5>
      </Box>
      <Box sx={{ "& button": { mr: 1 } }}>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          size="small"
        >
          {type}
        </Button>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          size="small"
        >
          {priority}
        </Button>
      </Box>
      <Box>
        <p>{limitString(`${description}`).string}</p>
      </Box>
    </Box>
  );
}
