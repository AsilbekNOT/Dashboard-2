import React from "react";
import { DFlexUf, PageP, SevenGnome, WidthZaynab } from "./styles";

function NeedDisplayFlexForPageTwo() {
  return (
    <>
      <WidthZaynab>
        <DFlexUf>
          <PageP>
            <p>Shoving 1 to 10 of 100 entries</p>
          </PageP>
          <SevenGnome>
            <p>Previous</p>
            <div
              style={{
                background: "#45A5FF",
                border: "2px solid #45A5FF",
                color: "white",
              }}
            >
              1
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <p>Next</p>
          </SevenGnome>
        </DFlexUf>
      </WidthZaynab>
      <br />
    </>
  );
}

export default NeedDisplayFlexForPageTwo;
