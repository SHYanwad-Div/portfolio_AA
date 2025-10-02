import { Typography, Box } from "@mui/material"

function About() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am a Computer Science student with interests in Web Development, AI/ML,
        and problem-solving. This portfolio highlights my learning journey.
      </Typography>
    </Box>
  )
}

export default About
