import { Box, Typography } from "@mui/material";

const inputContainer = {
    display: "flex",
    alignItems: "center",
    border: ".5px solid #ffffff1c",
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
      width: "90%",
      border: "none",
      background: "#ffffff00",
      color: "#fff",
      ":focus": {
        opacity: 1,
        outline: "none",
        background: "#0000001c",
      },
    },
  };
export default function InputContainer({ children }) {
  return <Box sx={inputContainer}>{children}</Box>;
}
