import React from "react";
import './App.css'
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Person from "./Components/Person/Person";

function App() {
  return (
    <div className="App">
    <Header />
      <Countries />
      <Person />
    </div>
  );
}


export default App;
