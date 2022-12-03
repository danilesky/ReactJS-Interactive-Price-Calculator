import React from "react";
import styled from "styled-components";

export const Form = styled.div`
  padding: 32px;
  border-radius: 29px;
  height: 652px;
  overflow: auto;
  background: white;
  max-width: 502px;
`;

export const FormOverlay = styled.div`
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
