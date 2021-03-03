import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board ncols={6} nrows={6} chanceLightStartsOn={.50}/>
    </div>
  );
}

export default App;
