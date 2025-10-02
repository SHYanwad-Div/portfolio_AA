import { Typography, Box } from "@mui/material"

function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: "center", borderTop: "1px solid #ddd" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Divya Shyanwad | Portfolio
      </Typography>
    </Box>
  )
}

export default Footer
