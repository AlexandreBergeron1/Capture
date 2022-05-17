import React from "react";
//Styles
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
