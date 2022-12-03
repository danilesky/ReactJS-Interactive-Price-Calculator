import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Choice from "./components/Choice";

function App() {
  const [firstCheck, setFirstCheck] = useState(false);

  return (
    <div className="App">
      <Choice
        options={["Liquid / Cream", "Other"]}
        title="What is the consistency of your products?"
      />
      <Choice
        options={["Aluminum-based sachet", "Recyclable sachet"]}
        title="Sachet material"
      />
    </div>
  );
}

export default App;
