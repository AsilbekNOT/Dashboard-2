import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavbarWrapper,
  NavItem,
  Navs,
  TextCommerce,
} from "./styles";
import square from "../../assets/icons/square.png";
import shopping from "../../assets/icons/shopping-cart.png";
import box from "../../assets/icons/box.png";
import people from "../../assets/icons/people.png";
import message from "../../assets/icons/email.png";
import settings from "../../assets/icons/gear.png";

function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Container>
          <TextCommerce>
            <p>E-commerse</p>
            <br />
            <br />
            <br />
            <br />
          </TextCommerce>
          <Navs>
            <NavItem>
              <img src={square} />
              <Link
                to="/dashboard"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </NavItem>
            <NavItem>
              <img src={shopping} />
              <Link
                to="/orders"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Orders
              </Link>
            </NavItem>
            <NavItem>
              <img src={box} />
              <Link
                to="/products"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Products
              </Link>
            </NavItem>
            <NavItem>
              <img src={people} />
              <Link
                to="/customer"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Customer
              </Link>
            </NavItem>
            <NavItem>
              <img src={message} />
              <Link
                to="/message"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Message
              </Link>
            </NavItem>
            <NavItem>
              <img src={settings} />
              <Link
                to="/settings"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Settings
              </Link>
            </NavItem>
          </Navs>
        </Container>
      </NavbarWrapper>
    </>
  );
}

export default Navbar;
