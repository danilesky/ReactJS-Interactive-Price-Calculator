import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Choice from "./components/Choice";

function App() {
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
      <Choice
        options={[
          { placeholder: "Gloss", value: false },
          { placeholder: "Matte", value: false },
        ]}
        title="Sachet surface"
      />
      <Choice
        options={[
          { placeholder: "Full color CMYK", value: false },
          { placeholder: "Black and whitet", value: false },
        ]}
        title="Sachet print"
      />
      <Choice
        options={[
          { placeholder: "1 – 2 ml", value: false },
          { placeholder: "3 ml", value: false },
          { placeholder: "4 – 5 ml", value: false },
          { placeholder: "Other", value: false },
        ]}
        title="Filling volume / sachet"
      />
      <Choice
        options={[
          { placeholder: "50 x 70 mm", value: false },
          { placeholder: "70 x 70 mm", value: false },
          { placeholder: "60 x 80 mm", value: false },
          { placeholder: "60 x 100 mm", value: false },
          { placeholder: "Other", value: false },
        ]}
        title="Sachet size"
      />
    </div>
  );
}

export default App;
