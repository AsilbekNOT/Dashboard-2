import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 1200px;
  margin: auto;
`;

export const NavbarFlex = styled.div`
  width: fit-content;
  display: flex;
`;

export const SearchProduct = styled.div`
  input {
    width: 470px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    ::-webkit-input-placeholder {
      color: lightgray;
    }
    margin-top: 17px;
  }
  img {
    width: 22px;
    position: absolute;
    top: 23px;
    left: 790px;
    cursor: pointer;
  }
`;

export const InputClover = styled.div`
  width: 90px;
  display: flex;
  margin-left: 140%;
  img {
    width: 90%;
    padding: 23px;
    padding-top: 10px;
    padding-left: 10px;
  }
  span {
    img {
      width: 69px;
      padding: 20px;
      padding-top: 20px;
      color: lightgray;
      cursor: pointer;
    }
  }
`;

export const ManTv = styled.div`
  width: 100%;
  display: flex;
  p {
    margin-top: 15px;
    text-align: center;
    font-weight: 480;
  }
`;
