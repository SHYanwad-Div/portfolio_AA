import { Card, CardContent, Typography } from "@mui/material";

function TaskCard({ title, description, status }) {
  return (
    <Card sx={{ my: 2, p: 1 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: status === "done" ? "green" : "orange" }}
        >
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
