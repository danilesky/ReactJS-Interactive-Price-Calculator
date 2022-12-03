import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Red Hat Display";
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #151617;
  margin-bottom: 7px;
`;

const Checks = styled.div`
  display: flex;
  gap: 10px;
`;
const Choice = ({ options, title }) => {
  const [choices, setChoices] = useState([]);
  const [name, setName] = useState("");

  const choicesHandler = (value, title) => {
    setChoices((prev) =>
      prev.map((choice) => {
        let newChoice = {};
        if (choice.placeholder === title) {
          newChoice = { ...choice, value: value };
        } else {
          newChoice = { ...choice, value: !value };
        }
        return newChoice;
      })
    );
  };
  console.log(choices);
  useEffect(() => {
    options && setChoices(options);
    title && setName(title);
  }, []);
  return (
    <ChoiceWrapper>
      <Title>{name}</Title>
      <Checks>
        {choices &&
          choices.map((choice) => (
            <Checkbox
              key={choice.placeholder}
              name={choice.placeholder}
              value={choice.value}
              checkFn={choicesHandler}
              //multiple -> allows choose more options
            />
          ))}
      </Checks>
    </ChoiceWrapper>
  );
};

export default Choice;
