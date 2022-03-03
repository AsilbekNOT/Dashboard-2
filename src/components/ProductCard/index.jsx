import React from "react";
import { useSelector } from "react-redux";
import { Table } from "./styles";
import NikeCrow from "../../assets/img/nike.jpg";
import {
  decrement,
  deleteCard,
  increment,
} from "../../redux/modules/cart/cardAction";
import { useDispatch } from "react-redux";
import Bin from "../../assets/img/bin.png";

function ProductCart() {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return (
    <Table>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        {/* <th>Address</th> */}
        <th>Action</th>
      </tr>
      {card.map(({ name, price, amount, chosen }, index) => (
        <tr>
          <td>
            <img src={NikeCrow} alt="" />
          </td>
          <td>{name}</td>
          <td>
            <button onClick={() => dispatch(increment(index))}>+</button>
            <span>{chosen}</span>
            <button onClick={() => dispatch(decrement(index))}>-</button>
          </td>
          <td>${price}.00</td>
          {/* <td>{amount}</td> */}
          <td>
            <button onClick={() => dispatch(deleteCard(index))}>
              <img style={{ width: "50px", padding: "5px" }} src={Bin} alt="" />
            </button>
            <button>SALE</button>
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default ProductCart;
