// src/pages/About.jsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About this portfolio
      </Typography>
      <Typography paragraph>
        This portfolio demonstrates the AeroAspire internship tasks: building a responsive
        site and enhancing it with React, MUI, routing, and state persistence.
      </Typography>
      <Typography paragraph>
        Week 2 focuses on converting the static site into modular React components and
        progressively improving UX (forms, routing, local storage).
      </Typography>
    </Box>
  );
}
