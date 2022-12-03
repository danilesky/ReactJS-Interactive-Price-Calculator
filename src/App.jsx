import React from "react";
import { useState } from "react";
import Choice from "./components/Choice";

function App() {
  const [material, setMaterial] = useState(false);
  console.log(material);
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
        chosenFn={(e) => setMaterial(e)}
      />
      <Choice
        disabled={!material}
        options={[
          { placeholder: "Gloss", value: false },
          { placeholder: "Matte", value: false },
        ]}
        title="Sachet surface"
      />
      <Choice
        disabled
        options={[
          { placeholder: "Full color CMYK", value: false },
          { placeholder: "Black and whitet", value: false },
        ]}
        title="Sachet print"
      />
      <Choice
        disabled
        options={[
          { placeholder: "1 – 2 ml", value: false },
          { placeholder: "3 ml", value: false },
          { placeholder: "4 – 5 ml", value: false },
          { placeholder: "Other", value: false },
        ]}
        title="Filling volume / sachet"
      />
      <Choice
        disabled
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
