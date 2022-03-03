import styled from "styled-components";

export const TableOrders = styled.div`
  width: 100%;
  margin: auto;
  table {
    width: 100%;
    margin-top: 45px;
  }
  tr {
    p {
      padding-top: 7px;
      padding-left: 20px;
    }
    b {
      font-weight: 100;
      color: #f7b148;
      background-color: #fff8ed;
      padding: 10px 30px;
      border-radius: 12px;
      transition-duration: 0.5s;
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
    img {
      width: 15px;
    }
  }
`;
