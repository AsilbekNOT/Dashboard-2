import React from "react";
import {
  ImageSearch,
  InputClover,
  ManTv,
  NavbarContainer,
  NavbarFlex,
  SearchProduct,
} from "./styles";
import search from "../../assets/icons/search.svg";
import bell from "../../assets/icons/bell.jpeg";
import down from "../../assets/icons/chevro.svg";
import man from "../../assets/icons/man.png";

function ContentNavbar() {
  return (
    <NavbarContainer>
      <NavbarFlex>
        <SearchProduct>
          <input type="text" placeholder="Search Product" />
          <img src={search} />
        </SearchProduct>
        <InputClover>
          <span>
            <img src={bell} />
          </span>

          <ManTv>
            <img src={man} />
            <p>maraim toxtasinov</p>

            <span>
              <img src={down} />
            </span>
          </ManTv>
        </InputClover>
      </NavbarFlex>
    </NavbarContainer>
  );
}

export default ContentNavbar;
