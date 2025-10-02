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
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TaskCard from "./components/TaskCard";

function App() {
  const tasks = [
    { id: 1, title: "Setup Vite + React", description: "Initialize project and install Material UI", status: "done" },
    { id: 2, title: "Create TaskCard component", description: "Render dummy tasks using props and style with MUI", status: "in progress" },
    { id: 3, title: "Write Day 2 docs", description: "Create documentation and README entry for Week 2 Day 2", status: "pending" },
  ];

  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Fixed header */}
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

        {/* spacer equal to AppBar height — prevents overlap */}
        <Toolbar />

        {/* Main content */}
        <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
          <Typography variant="h4" gutterBottom id="tasks">My Tasks</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Example task list rendered from a parent component via props.
          </Typography>

          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </Container>

        {/* Footer */}
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
