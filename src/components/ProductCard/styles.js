import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin: auto;
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  border: 2px solid white;
  background-color: whitesmoke;
  img {
    width: 100px;
    padding: 5px;
    /* border: 2px solid lightgray;
    border-radius: 10px; */
  }
  tr {
    font-size: 20px;
    font-weight: bold;
  }
  td {
    /* padding: 30px; */
    text-align: center;
    padding: 45px 0px;
    font-size: 23px;
    font-weight: 100;
    button {
      font-weight: 100;
      color: white;
      background-color: lightgray;
      padding: 10px 30px;
      margin-left: 17px;
      margin-right: 17px;
      border-radius: 12px;
      transition-duration: 0.5s;
      border: none;
      font-size: 20px;
      cursor: pointer;
      :hover {
        background-color: lightgreen;
        color: lightslategrey;
        cursor: pointer;
      }
    }
  }
  span {
    border: 2px solid lightgray;
    padding: 20px 40px;
    border-radius: 10px;
  }
`;
