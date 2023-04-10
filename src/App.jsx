import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createGlobalStyle } from 'styled-components';

import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Global = createGlobalStyle`
*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/movie/:id" exact element={<Movie />} />
          <Route path="/search/:query" exact element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;