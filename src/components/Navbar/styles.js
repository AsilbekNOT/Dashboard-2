import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: fit-content;
`;

export const Container = styled.div`
  width: fit-content;
`;

export const Navs = styled.div`
  width: fit-content;
`;

export const NavItem = styled.div`
  width: 100%;
  margin: 17px;
  padding: 17px;
  /* background-color: #edf6ff; */
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 0 10px lightgray;
  img {
    width: 40px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  :hover {
    background-color: #96CEF5;
    cursor: pointer;
  }
`;

export const TextCommerce = styled.div`
  p {
    font-size: 33px;
    margin-left: 40px;
    position: absolute;
    top: 50px;
  }
`;
