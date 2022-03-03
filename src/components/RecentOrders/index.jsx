import React from "react";
import { TableOrders } from "./styles";
import upDown from "../../assets/icons/upDown.png";
import NikeCrow from "../../assets/img/nike.jpg";

function RecentOrders() {
  return (
    <>
      {/* <TxtRecent>
        <p>Recent Orders</p>
        <img src={more} />
      </TxtRecent> */}
      <TableOrders>
        <table>
          <tr>
            <td>
              Order IDi <img src={upDown} />
            </td>
            <td>
              Product Name <img src={upDown} />
            </td>
            <td>
              Date <img src={upDown} />
            </td>
            <td>
              Price <img src={upDown} />
            </td>
            <td>
              Status <img src={upDown} />
            </td>
          </tr>
          {/* {products.map(()=>(

          ))} */}
          <br />
          <br />
          <tr>
            <td style={{ color: "black" }}>#78522135</td>
            <td>
              <div>
                <img style={{ width: "65px" }} src={NikeCrow} />{" "}
                <p>Nike Air Max</p>
              </div>
            </td>
            <td>31/03/2021</td>
            <td>$250.00</td>
            <td>
              <b>Complete</b>
            </td>
          </tr>
          <br />
          <br />
          <br />
          <tr>
            <td style={{ color: "black" }}>#78522135</td>
            <td>
              <div>
                <img style={{ width: "65px" }} src={NikeCrow} />
                <p>HeadPhones</p>
              </div>
            </td>
            <td>31/03/2021</td>
            <td>$250.00</td>
            <td>
              <b>Complete</b>
            </td>
          </tr>
          <br />
          <br />
          <br />
          <tr>
            <td style={{ color: "black" }}>#78522135</td>
            <td>
              <div>
                <img style={{ width: "65px" }} src={NikeCrow} />
                <p>Iphone Pro</p>
              </div>
            </td>
            <td>31/03/2021</td>
            <td>$250.00</td>
            <td>
              <b>Complete</b>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>dssd</td>
            <td style={{ color: "white" }}>dssd</td>
            <td
              style={{
                padding: "38px 20px",
                fontWeight: "bold",
              }}
            >
              <p style={{ cursor: "pointer" }}>See all</p>
            </td>
          </tr>
        </table>
      </TableOrders>
    </>
  );
}

export default RecentOrders;
