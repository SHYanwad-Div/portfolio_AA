// src/App.jsx
import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Container,
  Box, IconButton, Button, CssBaseline
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Setup Vite + React", description: "Initialize project and install Material UI", status: "done" },
    { id: 2, title: "Create TaskCard component", description: "Render dummy tasks using props and style with MUI", status: "in progress" },
  ]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              AeroAspire — Portfolio (Week 2)
            </Typography>
            <Button color="inherit" href="#tasks">Tasks</Button>
            <Button color="inherit" href="#about">About</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />

        <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
          <Typography variant="h4" gutterBottom id="tasks">My Tasks</Typography>

          {/* New Form */}
          <AddTaskForm onAdd={handleAddTask} />

          {/* Task List */}
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </Container>

        <Box component="footer" sx={{ py: 2, textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <Container>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Divya Shyanwad — AeroAspire Internship
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
