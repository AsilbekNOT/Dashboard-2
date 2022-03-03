import React from "react";
import { BgCard, DFlexForBgCard, WidthFull } from "./styles";
import hand from "../../assets/icons/hand.png";
import right from "../../assets/icons/arrow-up-right.svg";
import rightup from "../../assets/icons/arrow-down-right.svg";
import users from "../../assets/icons/users.png";
import shop from "../../assets/icons/shop-card.png";
import dotted from "../../assets/icons/dots.png";

function FourChildren() {
  return (
    <WidthFull>
      <DFlexForBgCard>
        <BgCard>
          <div>
            <img src={hand} />
            <img
              style={{
                background: "White",
                position: "absolute",
                left: "310px",
                top: "124px",
                width: "60px",
              }}
              src={dotted}
            />
          </div>

          <br />
          <br />
          <b>$25,255.00</b>
          <br />
          <div>
            <p>Today Sales</p>
            <span>
              <img src={right} />
              <p>+35%</p>
            </span>
          </div>
        </BgCard>
        <br />
        <BgCard>
          <div>
            <img src={hand} />
            <img
              style={{
                background: "White",
                position: "absolute",
                left: "726px",
                top: "124px",
                width: "60px",
              }}
              src={dotted}
            />
          </div>
          <br />
          <br />
          <b>$1255.00</b>
          <br />
          <div>
            <p>Today Expenses</p>
            <span>
              <img style={{ background: "#FEECE9" }} src={rightup} />
              <p style={{ color: "#EB634F" }}>+10%</p>
            </span>
          </div>
        </BgCard>
        <br />
        <BgCard>
          <div>
            <img style={{ background: "#FAEBFF" }} src={users} />
            <img
              style={{
                background: "White",
                position: "absolute",
                left: "1142px",
                top: "124px",
                width: "60px",
              }}
              src={dotted}
            />
          </div>
          <br />
          <br />
          <b>5355</b>
          <br />
          <div>
            <p>Today Visitors</p>
            <span>
              <img src={right} />
              <p>+15%</p>
            </span>
          </div>
        </BgCard>
        <br />
        <BgCard>
          <div>
            <img style={{ background: "#FAEBFF" }} src={shop} />
            <img
              style={{
                background: "White",
                position: "absolute",
                left: "1558px",
                top: "124px",
                width: "60px",
              }}
              src={dotted}
            />
          </div>
          <br />
          <br />
          <b>$500</b>
          <br />
          <div>
            <p>Today Orders</p>
            <span>
              <img src={right} />
              <p>+17%</p>
            </span>
          </div>
        </BgCard>
      </DFlexForBgCard>
    </WidthFull>
  );
}

export default FourChildren;
