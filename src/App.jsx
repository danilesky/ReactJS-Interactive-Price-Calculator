import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const [firstCheck, setFirstCheck] = useState(false);

  return (
    <div className="App">
      <Checkbox checkFn={setFirstCheck} />
    </div>
  );
}

export default App;
