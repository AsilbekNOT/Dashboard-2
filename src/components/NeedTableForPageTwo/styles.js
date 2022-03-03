import styled from "styled-components";

export const WidthTable = styled.div`
  width: 100%;
`;
export const TableForPageTwo = styled.div`
  width: 100%;
  table {
    width: 100%;
    margin-top: 45px;
  }
  tr {
    p {
      padding-top: 7px;
      padding-left: 25px;
    }
    button {
      font-weight: 100;
      color: #f7b148;
      background-color: #fff8ed;
      padding: 10px 30px;
      border-radius: 12px;
      transition-duration: 0.5s;
      border: none;
      font-size: 18px;
      :hover {
        background-color: lightgreen;
        color: lightslategrey;
        cursor: pointer;
      }
    }
    div {
      display: flex;
    }
  }
  td {  
    font-size: 18px;
    color: #797e85;
    /* padding: 1px 100px; */
    padding: 15px 4px;
    img {
      width: 15px;
    }
  }
`;

