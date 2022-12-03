import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Choice from "./components/Choice";

function App() {
  const [firstCheck, setFirstCheck] = useState(false);

  return (
    <div className="App">
      <Choice
        options={[
          { placeholder: "Liquid / Cream", value: false },
          { placeholder: "Other", value: false },
        ]}
        title="What is the consistency of your products?"
      />
      <Choice
        options={[
          { placeholder: "Aluminum-based sachet", value: false },
          { placeholder: "Recyclable sachet", value: false },
        ]}
        title="Sachet material"
      />
    </div>
  );
}

export default App;
