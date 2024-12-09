import React from "react";
import { Route, Routes } from "react-router-dom";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Home from "./components/Home";
import Economy from "./pages/Economy";
import NavBar from "./components/Navbar";
import Travel from "./pages/Travel";
import Culture from "./pages/Culture";
import Politics from "./pages/Politics";
import About from "./pages/About";
import Football from "./pages/Football";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="science" Component={Science} />
          <Route path="Technology" Component={Technology} />
          <Route path="culture" Component={Culture} />
          <Route path="Travel" Component={Travel} />
          <Route path="Politics" Component={Politics} />
          <Route path="Economy" Component={Economy} />
          <Route path="About" Component={About} />
          <Route path="Football" Component={Football} />
        </Routes>
      </div>
    </>
  );
}

export default App;
