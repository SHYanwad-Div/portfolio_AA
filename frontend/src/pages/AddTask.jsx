// src/pages/AddTask.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import AddTaskForm from "../components/AddTaskForm";

export default function AddTask({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (task) => {
    onAdd(task);
    // go back to home after add
    navigate("/");
  };

  return <AddTaskForm onAdd={handleAdd} />;
}
