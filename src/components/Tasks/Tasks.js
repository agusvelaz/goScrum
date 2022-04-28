import { Box, Typography } from "@mui/material";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
const taskContainer = {
  borderRadius: "5px",
  padding: 2,
  display:'flex',
  flexDirection: { xs: "column", md: "row" },
  m:'20px auto',
  
};
export default function Tasks() {
  return (
    <Box component="section" sx={taskContainer} id="tasks">
      <TaskForm/>
      <TasksList/>
    </Box>
  );
}
