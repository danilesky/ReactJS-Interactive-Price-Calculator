import styled from "styled-components";

const Box = styled.div`
  font-family: "Red Hat Display";
  background: white;
  padding: 18px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  width: 100%;
  height: fit-content;
  max-width: ${(props) => {
    if (props.width) {
      return props.width + "px";
    } else {
      return "fit-content";
    }
  }};
`;

export default Box;
