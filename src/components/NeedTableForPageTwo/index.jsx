import { TableForPageTwo, WidthTable, WTF } from "./styles";
import upDown from "../../assets/icons/upDown.png";
import NikeCrow from "../../assets/img/nike.jpg";
import { productsList } from "./ProducList";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/modules/cart/cardAction";

function NeedTableForPageTwo() {
  const dispatch = useDispatch();

  return (
    <WidthTable>
      <TableForPageTwo>
        <table>
          <tr>
            <td>#</td>
            <td>
              Order Id <img src={upDown} />
            </td>
            <td>
              Product Name <img src={upDown} />
            </td>
            <td>
              Address
              <img src={upDown} />
            </td>
            <td>
              Date
              <img src={upDown} />
            </td>
            <td>
              Price
              <img src={upDown} />
            </td>
            <td>
              Status
              <img src={upDown} />
            </td>
          </tr>
          <br />
          <br />
          {productsList.map(({ name, price, amount, date }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>#785221315</td>
              <td>
                <div>
                  <img style={{ width: "65px" }} src={NikeCrow} />
                  <p>{name}</p>
                </div>
              </td>
              <td>{amount}</td>
              <td>{date}</td>
              <td>${price}.00</td>
              <td>
                <button
                  onClick={() =>
                    dispatch(
                      addToCard({ name, price, amount, date, chosen: 1 })
                    )
                  }
                >
                  BUY
                </button>
              </td>
            </tr>
          ))}
          {/* <br />
          // <br />
          // <tr>
          //   <td>2</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>HeadPhones</p>
          //     </div>
          //   </td>
          //   <td>6391 Elgin St. Celina</td>
          //   <td>21/03/2021</td>
          //   <td>$276.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>3</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Iphone Pro</p>
          //     </div>
          //   </td>
          //   <td>8502 Preston Rd. Inglewood</td>
          //   <td>01/04/2021</td>
          //   <td>$300.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>4</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Apple AirPods Pro</p>
          //     </div>
          //   </td>
          //   <td>4517 Washington Ave. Manchester</td>
          //   <td>01/04/2021</td>
          //   <td>$200.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>5</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Nike Air Max</p>
          //     </div>
          //   </td>
          //   <td>3891 Ranchview Dr. Richardson</td>
          //   <td>02/04/2021</td>
          //   <td>$100.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>6</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Girls Bag</p>
          //     </div>
          //   </td>
          //   <td>2972 Westheimer Rd. Santa Ana</td>
          //   <td>02/04/2021</td>
          //   <td>$76.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>7</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Ganon 600d</p>
          //     </div>
          //   </td>
          //   <td>3517 W. Gray St. Utica</td>
          //   <td>03/04/2021</td>
          //   <td>$500.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>8</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Apple Watch</p>
          //     </div>
          //   </td>
          //   <td>4140 Parker Rd. Allentown</td>
          //   <td>07/04.2021</td>
          //   <td>$300.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>9</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Apple Macbook Air13"</p>
          //     </div>
          //   </td>
          //   <td>3517 W. Gray. St. Utica</td>
          //   <td>10/04/2021</td>
          //   <td>$600.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr>
          // <br />
          // <br />
          // <tr>
          //   <td>10</td>
          //   <td>#785221315</td>
          //   <td>
          //     <div>
          //       <img style={{ width: "65px" }} src={NikeCrow} />
          //       <p>Alexa Box</p>
          //     </div>
          //   </td>
          //   <td>2464 Royal Ln. Mesa</td>
          //   <td>09/04/2021</td>
          //   <td>$76.00</td>
          //   <td>
          //     <button>Complete</button>
          //   </td>
          // </tr> */}
        </table>
      </TableForPageTwo>
    </WidthTable>
  );
}

export default NeedTableForPageTwo;
