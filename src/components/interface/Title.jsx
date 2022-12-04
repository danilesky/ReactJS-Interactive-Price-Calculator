import React from "react";
import styled from "styled-components";

const Title = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #151617;
  margin-bottom: 7px;
  width: 100%;
  ${(props) => props.size && `font-size:${props.size}px;`}
  ${(props) => props.align && `text-align:${props.align};`};
  ${(props) => props.justifyItem && `justify-content:${props.justifyItem};`};
`;

export default Title;
