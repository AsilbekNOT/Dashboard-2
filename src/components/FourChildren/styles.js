import styled from "styled-components";

export const WidthFull = styled.div`
  width: 100%;
  margin-top: 55px;
`;

export const DFlexForBgCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BgCard = styled.div`
  width: 370px;
  height: 185px;
  box-shadow: 0 0 10px lightgray;
  border-radius: 10px;
  padding: 20px;


  img {
    width: 15%;
    background-color: #efecff;
    border-radius: 50%;
    padding: 15px;
    border: none;
  }
  b {
    font-size: 22px;
  }
  p {
    margin-top: 15px;
    color: gray;
    font-weight: bold;
  }
  span {
    display: flex;
    p {
      color: #31ab68;
      font-size: 22px;
      font-weight: bold;
    }
    img {
      width: 27%;
      height: 50%;
      margin-top: 16px;
      background-color: #e6f7ed;
      padding: 0px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
