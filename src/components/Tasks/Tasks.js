import { Box, Typography } from "@mui/material";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
const TaskContainer = {
  backgroundColor: "primary.light",
  borderRadius: "5px",
  padding: 2,
};
export default function Tasks() {
  return (
    <Box component="section" sx={TaskContainer} id="tasks">
      <TaskForm/>
      <TasksList/>
    </Box>
  );
}
