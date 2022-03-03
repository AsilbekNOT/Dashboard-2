import React from "react";
import { DFlexFourTick, FourTickCheK } from "./styles";

function FourTick() {
  return (
    <FourTickCheK>
      <DFlexFourTick>
        <p
          style={{
            color: "#5FAEF8",
            border: "2px solid #5FAEF8",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
        >
          All Orders
        </p>
        <p>Completed</p>
        <p>Panding</p>
        <p>Cancel</p>
      </DFlexFourTick>
    </FourTickCheK>
  );
}

export default FourTick;
