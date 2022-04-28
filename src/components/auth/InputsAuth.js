import { Box, Typography } from "@mui/material";

const inputContainer = {
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  height: 40,
  svg: {
    m: 1,
    color: "#ffffff2c",
    fontSize: 21,
  },
  input: {
    my: 0.5,
    height: "100%",
    width: "100%",
    border: "2px solid #ffffff00",
    background: "#ffffff00",
    color: "#fff",
    ":focus": {
      opacity: 1,
      outline: "none",
      background: "#0000001c",
    },
  },
};
export default function InputsAuth({ children, errorInput }) {
  // console.log(errorInput);
  return (
    <Box
      sx={inputContainer}
      border={errorInput ? "1px solid red" : "1px solid #ffffff1c"}
    >
      {children}
    </Box>
  );
}
