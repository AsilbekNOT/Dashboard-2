import React from "react";
import more from "../../assets/icons/more.png";
import { DFlexNone, TxtRecent, TxtRecenT2 } from "./styles";

function TextRecend() {
  return (
    <DFlexNone>
      <TxtRecent>
        <p>Recent Orders</p>
        <img src={more} />
      </TxtRecent>
      <TxtRecenT2>
        <p style={{ paddingLeft: "100px" }}>Visit Customers</p>
        <img src={more} />
      </TxtRecenT2>
    </DFlexNone>
  );
}

export default TextRecend;
