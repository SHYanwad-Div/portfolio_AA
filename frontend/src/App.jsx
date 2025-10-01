import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./styles.css"; // from Week 1 (global CSS)

function App() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Container */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          This is the Week 2 – Day 1 setup with React + Vite + MUI.
          We will keep enhancing this day by day.
        </Typography>
      </Container>
    </>
  );
}

export default App;
