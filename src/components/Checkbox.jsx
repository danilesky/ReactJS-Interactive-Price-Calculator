import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import checkmark from "../assets/check.svg";

const CheckboxWrap = styled.div`
  font-family: "Red Hat Display", sans-serif;
  padding: 20px;
  cursor: pointer;
  padding: 15px 22px;
  background: #f9f9f9;
  border: 3px solid #d0f9d4;
  border-color: #f9f9f9;
  border-radius: 32px;
  display: flex;
  color: #000000;
  justify-content: center;
  align-items: center;
  width: fit-content;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  position: relative;
  transition: 0.3s ease;
  &:before {
    content: url(${checkmark});
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 30px;
    background: #35bb44;
    border: 2px solid #ffffff;
    top: 0;
    transform: translateY(-100%);
    opacity: 0;
    transition: 0.3s ease;
    right: 20px;
  }
  ${(props) => {
    if (props.actived) {
      return `background-color : #35BB44;
      border-color:#d0f9d4;
      color: #FFFFFF;
      transition:.3s ease;
      &:before{
        transform: translateY(-50%) translateX(0%);
        opacity:1;
      }
      `;
    }
  }}
`;

const CheckboxInside = styled.div`
  display: flex;
  gap: 10px;
`;
const Checkbox = ({ checkFn, name, value, multiple }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    if (!multiple) {
      checkFn && checkFn(!checked, name);
      value && setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };

  !multiple &&
    useEffect(() => {
      setChecked(value);
    }, [value]);

  return (
    <CheckboxWrap
      type="checkbox"
      id={name}
      onClick={checkHandler}
      actived={checked}
    >
      <CheckboxInside>{name}</CheckboxInside>
    </CheckboxWrap>
  );
};

export default Checkbox;
