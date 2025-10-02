import { Container, Typography } from "@mui/material";
import TaskCard from "./components/TaskCard";

function App() {
  // Dummy tasks
  const tasks = [
    {
      id: 1,
      title: "Setup Vite + React",
      description: "Initialize project and install Material UI",
      status: "done",
    },
    {
      id: 2,
      title: "Create TaskCard",
      description: "Render dummy tasks using props",
      status: "in progress",
    },
    {
      id: 3,
      title: "Documentation",
      description: "Write reflection for Day 2",
      status: "pending",
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Tasks
      </Typography>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
        />
      ))}
    </Container>
  );
}

export default App;
