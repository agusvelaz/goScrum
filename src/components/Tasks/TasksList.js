import { Box, Button, Typography } from "@mui/material";
import data from "./data";
import TaskCard from "./TaskCard";
const taskslistContainer = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-evenly",
};
const tasksList = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "primary.main",
  m: 1,
  p: 2,
  borderRadius: "5px",
  width: { md: 500 },
};

export default function TasksList() {
  const renderTasks = () => {
    return data.map((data) => <TaskCard key={data.id} data={data} />);
  };
  return (
    <Box component="section" id="TaskList"sx={taskslistContainer}>
      <Box>
        <h2>Mis Tareas</h2>
      </Box>
      <Box sx={tasksList}>
        <h4>Nuevas</h4>
        {renderTasks()}
      </Box>
      <Box sx={tasksList}>
        <h4>Nuevas</h4>
        {renderTasks()}
      </Box>
      <Box sx={tasksList}>
        <h4>Nuevas</h4>
        {renderTasks()}
      </Box>
    </Box>
  );
}
