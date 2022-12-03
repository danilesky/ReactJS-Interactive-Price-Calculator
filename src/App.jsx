import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Choice from "./components/Choice";

const AppBody = styled.div`
  display: flex;
  background: #f0ece8;
  min-height: 100vh;
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`;
const FormOverlay = styled.div`
  height: 652px;
  position: relative;
  &:after {
    content: "";
    height: 60px;
    width: 100%;
    background: linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 115.57%
    );
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
const Form = styled.div`
  padding: 32px;
  border-radius: 29px;
  height: 652px;
  overflow: auto;
  background: white;
  max-width: 502px;
`;

function App() {
  const [material, setMaterial] = useState(false);
  const [surface, setSurface] = useState(false);
  const [print, setPrint] = useState(false);
  const [sachet, setSachet] = useState(false);
  const [filling, setFilling] = useState(false);
  console.log(material);
  return (
    <AppBody>
      <FormOverlay>
        <Form>
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
            chosenFn={(e) => setSurface(e)}
          />
          <Choice
            disabled={!surface}
            options={[
              { placeholder: "Full color CMYK", value: false },
              { placeholder: "Black and whitet", value: false },
            ]}
            title="Sachet print"
            chosenFn={(e) => setPrint(e)}
          />
          <Choice
            disabled={!print}
            options={[
              { placeholder: "1 – 2 ml", value: false },
              { placeholder: "3 ml", value: false },
              { placeholder: "4 – 5 ml", value: false },
              { placeholder: "Other", value: false },
            ]}
            title="Filling volume / sachet"
            chosenFn={(e) => setFilling(e)}
          />
          <Choice
            disabled={!filling}
            options={[
              { placeholder: "50 x 70 mm", value: false },
              { placeholder: "70 x 70 mm", value: false },
              { placeholder: "60 x 80 mm", value: false },
              { placeholder: "60 x 100 mm", value: false },
              { placeholder: "Other", value: false },
            ]}
            title="Sachet size"
          />
        </Form>
      </FormOverlay>
    </AppBody>
  );
}

export default App;
