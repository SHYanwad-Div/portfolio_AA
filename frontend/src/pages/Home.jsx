// src/pages/Home.jsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TaskCard from "../components/TaskCard";

export default function Home({ tasks = [], onDelete, onEdit }) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Tasks
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Tasks are saved in your browser (localStorage). Use the Add Task page to create a new task.
      </Typography>

      {tasks.length === 0 ? (
        <Typography>No tasks yet — go to Add Task.</Typography>
      ) : (
        tasks.map(task => (
          <TaskCard key={task.id} {...task} onDelete={() => onDelete && onDelete(task.id)} onEdit={(updated) => onEdit && onEdit(task.id, updated)} />
        ))
      )}
    </Box>
  );
}
