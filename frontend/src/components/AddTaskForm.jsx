// src/components/AddTaskForm.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (title.length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }
    setError("");
    onAdd({
      id: Date.now(),
      title,
      description,
      status: "pending",
    });
    setTitle("");
    setDescription("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>Add a New Task</Typography>
      
      <TextField
        fullWidth
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        required
        error={!!error}
        helperText={error}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        multiline
        rows={3}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </Box>
  );
}

export default AddTaskForm;