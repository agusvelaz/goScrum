import { Box, Button, Typography } from "@mui/material";
import data from "./data";
import TaskCard from "./TaskCard";
const taskSection = {
  backgroundColor:"primary.light",
  borderRadius: "5px",
  p:2,
  width: { md: '70%', xl:'55%'},
  boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
}
const taskslistContainer = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-evenly",
};
const tasksList = {
  display: "flex",
  flexDirection: "column",
  p: 2,
  borderRadius: "5px",
  width: { md: 500 },
  backgroundColor: "primary.main",
};

export default function TasksList() {
  const renderTasks = () => {
    return data.map((data) => <TaskCard key={data.id} data={data} />);
  };
  return (
    <Box component="section" id="TaskList" sx={taskSection}>
      <Box>
        <h2>Mis Tareas</h2>
      </Box>
      <Box sx={taskslistContainer}>
        <Box sx={tasksList}>
          <h4>Nuevas</h4>
          {renderTasks()}
        </Box>
        <Box sx={tasksList} mx={{xs:0, md:2}} my={{xs:2, md:0}}>
          <h4>En proceso</h4>
          {renderTasks()}
        </Box>
        <Box sx={tasksList}>
          <h4>Finalizadas</h4>
          {renderTasks()}
        </Box>
      </Box>
    </Box>
  );
}
