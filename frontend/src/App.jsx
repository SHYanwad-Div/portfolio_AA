// src/App.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TaskCard from "./components/TaskCard";

/**
 * App.jsx - Week 2 Day 2 (fixed full-width layout)
 */

function App() {
  // Dummy tasks (parent -> child via props)
  const tasks = [
    {
      id: 1,
      title: "Setup Vite + React",
      description: "Initialize project and install Material UI",
      status: "done",
    },
    {
      id: 2,
      title: "Create TaskCard component",
      description: "Render dummy tasks using props and style with MUI",
      status: "in progress",
    },
    {
      id: 3,
      title: "Write Day 2 docs",
      description: "Create documentation and README entry for Week 2 Day 2",
      status: "pending",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AeroAspire — Portfolio (Week 2)
          </Typography>

          <Button color="inherit" href="#tasks">Tasks</Button>
          <Button color="inherit" href="#about">About</Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="xl" sx={{ mt: 10, mb: 4, flex: 1 }}>
        <Typography variant="h4" gutterBottom id="tasks">
          My Tasks
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Example task list rendered from a parent component via props. Each TaskCard
          receives <code>title</code>, <code>description</code> and <code>status</code>.
        </Typography>

        {/* Task list */}
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} sx={{ width: "100%" }} />
        ))}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          mt: "auto",
        }}
      >
        <Container>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Divya Shyanwad — AeroAspire Internship
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
