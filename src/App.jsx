import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Choice from "./components/Choice";
import { Form, FormOverlay } from "./components/interface/Form";
import sachetImage from "./assets/sachet.png";
import Image from "./components/interface/Image";
import Box from "./components/interface/Box";

const AppBody = styled.div`
  display: flex;
  gap: 136px;
  background: #f0ece8;
  min-height: 100vh;
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <BoxWrapper>
        <Image
          src={sachetImage}
          height={465}
          width={396}
          alt="Minipak sachet"
        />
        <Box width={324}>Hello</Box>
      </BoxWrapper>
      <FormOverlay>
        <Form scrollable={filling}>
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
