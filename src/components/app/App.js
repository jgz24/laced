import React from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <hr className="lineBreak"></hr>
      </div>
      <div>
        <Results />
      </div>
    </React.Fragment>
  );
}
