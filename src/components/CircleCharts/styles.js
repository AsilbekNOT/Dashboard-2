import styled from "styled-components";

export const DFlexText = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    position: absolute;
    font-size: 25px;
    font-weight: bold;
    color: gray;
  }
  b {
    position: absolute;
    left: 92%;
    border: 1px solid lightgray;
    border-radius: 7px;
    padding: 7px 20px;
    font-weight: 100;
    color: gray;
    font-family: sans-serif;
    display: flex;
    justify-content: space-between;
  }
`;

export const WidthChart = styled.div`
  width: 47%;
  margin-left: 100px;
`;
