// src/components/AddTaskForm.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function AddTaskForm({ onAdd, initial = { title: "", description: "" }, saving = false }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }
    setError("");
    const newTask = { title: title.trim(), description: description.trim(), status: "pending" };
    onAdd(newTask);
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
        helperText={error || "Enter a short, descriptive title"}
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

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={saving}>
        {saving ? "Saving…" : "Add Task"}
      </Button>
    </Box>
  );
}
