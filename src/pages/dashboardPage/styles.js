import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 85%;
  margin: auto;
  /* background-color: aqua; */
  position: absolute;
  top: 140px;
  left: 270px;
`;

export const Container = styled.div``;

export const DflexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
div{
  display: flex;
}
  p {
    font-size: 29px;
    font-weight: bold;
    margin-top: 25px;
  }
  b{
    font-size: 14px;
    margin-top: 38px;
    margin-left: 10px;
    font-weight: bold;
    color: #797E85;
  }
`;

export const ContentTwo = styled.div`
  display: flex;
`;

export const ContentIcon = styled.div`
  background-color: #45a5ff;
  padding: 10px 20px;
  margin-right: 30px;
  border-radius: 10px;
  color: white;
  display: flex;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    margin-top: 5px;
    padding: 10px;
  }
`;

export const ContentDate = styled.div`
  padding: 10px 20px;
  /* margin-right: 120px; */
  border-radius: 10px;
  display: flex;
  border: 2px solid lightgray;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    margin-top: 5px;
    padding: 10px;
    color: gray;
    font-weight: 545;
  }
`;
export const FullDant = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DFlexOrders = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;