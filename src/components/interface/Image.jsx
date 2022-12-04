import React from "react";
import styled from "styled-components";

const Image = styled.img`
  ${(props) => {
    return `height: ${props.height ? props.height + "px" : "auto"};
    width: ${props.width ? props.width + "px" : "auto"}
    `;
  }}
`;

export default Image;
