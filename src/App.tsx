import React from "react";

import "./css/App.css";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Header />

        <About />
        <Projects />
        <MySkills />

        <Footer />
      </div>
    </div>
  );
}

export default App;
