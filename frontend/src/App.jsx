import { AppBar, Toolbar, Typography, Container } from "@mui/material"
import "./App.css"

function App() {
  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          This is the starting point of my React + Vite + MUI based portfolio.
          Each section (Home, About, Contact, etc.) will be added as a component
          and enhanced day by day.
        </Typography>
      </Container>
    </>
  )
}

export default App
