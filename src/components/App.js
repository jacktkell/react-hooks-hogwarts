import React from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogTiles hogs={hogs}/>
    </div>
  );
}

export default App;




// When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved)