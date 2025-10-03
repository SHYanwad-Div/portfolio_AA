// src/components/TaskCard.jsx
import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

function TaskCard({ id, title, description, status = "pending", onDelete, onEdit }) {
  const statusColor = status === "done" ? "success.main" : status === "in progress" ? "warning.main" : "text.secondary";

  return (
    <Card variant="outlined" sx={{ my: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{title}</Typography>
            {description && <Typography variant="body2" color="text.secondary">{description}</Typography>}
          </Box>
          <Box sx={{ textAlign: "right", minWidth: 96 }}>
            <Typography variant="caption" sx={{ color: statusColor, fontWeight: 700, textTransform: "capitalize" }}>
              {status}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button size="small" onClick={() => onEdit && onEdit({ status: status === "done" ? "pending" : "done" })}>Toggle</Button>
              <Button size="small" color="error" onClick={() => onDelete && onDelete(id)} sx={{ ml: 1 }}>Delete</Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default React.memo(TaskCard);
