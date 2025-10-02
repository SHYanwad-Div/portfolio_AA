import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function TaskCard({ title, description, status = "pending", sx }) {
  const statusColor =
    status === "done" ? "success.main" : status === "in progress" ? "warning.main" : "text.secondary";

  return (
    <Card variant="outlined" sx={[{ my: 2 }, sx]}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '100%' }}>
              {description}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "right", minWidth: 96 }}>
            <Typography variant="caption" sx={{ color: statusColor, fontWeight: 700 }}>
              {status}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default React.memo(TaskCard);
