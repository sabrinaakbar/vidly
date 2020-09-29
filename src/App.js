import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="display-4 text-center">Vidly Project</h1>
      <Movies />
    </div>
  );
}

export default App;
