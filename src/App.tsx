import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Box maxWidth={1200} marginX="auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
