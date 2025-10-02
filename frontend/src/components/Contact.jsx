import { Typography, Box, Link } from "@mui/material"

function Contact() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography>Email: dya.shyanwad@gmail.com</Typography>
      <Typography>
        LinkedIn:{" "}
        <Link href="https://www.linkedin.com/in/divya-shyanwad" target="_blank">
          divya-shyanwad
        </Link>
      </Typography>
    </Box>
  )
}

export default Contact
