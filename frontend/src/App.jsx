// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

/* KEY: localStorage key */
const STORAGE_KEY = "portfolio_tasks_v1";

/* Default seeds (you can modify) */
const defaultTasks = [
  { id: 1, title: "Setup Vite + React", description: "Initialize project and install MUI", status: "done" },
  { id: 2, title: "Create TaskCard component", description: "Render tasks from props", status: "in progress" }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultTasks;
    } catch (e) {
      console.error("Failed to parse tasks from localStorage:", e);
      return defaultTasks;
    }
  });

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage:", e);
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const editTask = (id, updated) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...updated } : t)));
  };

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        {/* Add a Toolbar spacer to avoid AppBar overlap is inside Header */}
        <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<Home tasks={tasks} onDelete={deleteTask} onEdit={editTask} />} />
            <Route path="/add" element={<AddTask onAdd={addTask} />} />
            <Route path="/about" element={<About />} />
            {/* fallback route */}
            <Route path="*" element={<Home tasks={tasks} onDelete={deleteTask} onEdit={editTask} />} />
          </Routes>
        </Container>

        <Box component="footer" sx={{ py: 2, textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <Container maxWidth="lg">
            <small style={{ color: "gray" }}>© {new Date().getFullYear()} Divya Shyanwad — AeroAspire Internship</small>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
