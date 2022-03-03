import styled from "styled-components";

export const ButtonCreate = styled.div`
  width: fit-content;
  button {
    margin-top: 25px;
    padding: 15px 30px;
    border: none;
    background-color: #45a5ff;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition-duration: 0.3s;
    :hover {
      background-color: gold;
      color: red;
      cursor: pointer;
    }
  }
`;
