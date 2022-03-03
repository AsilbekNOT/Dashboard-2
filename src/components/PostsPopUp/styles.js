import styled from "styled-components";

export const Form = styled.div``;

export const ButtonActive = styled.button`
  width: 22%;
  height: 50px;
  margin: auto;
  position: absolute;
  position: fixed;
  left: 1190px;
  top: 873px;
  border-radius: 10px;
  border: 2px solid #4ca85e;
  cursor: pointer;
  background-color: #4ca85e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  input[type="submit"] {
    background-color: #4ca85e;
    border: none;
    color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const PopUpBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopUpBox = styled.div`
  width: 850px;
  max-height: 710px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 450px;
  bottom: 50px;
  margin: auto;
  display: flex;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
`;
export const PopUpDick = styled.div`
  width: 420px;
  max-height: 465px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 890px;
  right: 0;
  bottom: 290px;
  margin: auto;
  display: flex;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
`;
export const PopUpApply = styled.div`
  width: 420px;
  max-height: 270px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  top: 545px;
  left: 890px;
  right: 0;
  bottom: 50px;
  margin: auto;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const ProductNameInput = styled.div`
  width: 315%;
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: #c4c9d0;
    }
  }
`;

export const DescriptionInput = styled.div`
  width: 315%;
  margin-top: 40px;
  p {
    margin-bottom: 10px;
    color: #677481;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 250px;
    padding: 13px;
    border-radius: 10px;
    border: 2px solid lightgray;
    ::-webkit-input-placeholder {
      color: #c4c9d0;
      font-size: 17px;
    }
  }
`;

export const AddImages = styled.div`
  width: 315%;
  margin-top: 40px;
  input {
    width: 100%;
    ::-webkit-file-upload-button {
      width: 100%;
      height: 220px;
      border: 3px dotted lightgray;
      color: #f4f6f8;
      background-color: #f4f6f8;
    }
  }
  p {
    margin-bottom: 10px;
    color: #677481;
    font-weight: bold;
  }
  img {
    width: 150px;
    position: absolute;
    left: 100px;
    margin-top: 35px;
  }
  div {
    p {
      position: absolute;
      bottom: 135px;
      left: 280px;
      font-size: 20px;
      color: black;
    }
    b {
      position: absolute;
      bottom: 115px;
      left: 280px;
      font-size: 13px;
      color: #848e99;
      span {
        color: #4ca85e;
        border: 2px solid #4ca85e;
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 2px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;

// "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"

export const TickAnimation = styled.div`
  width: 100%;
  div {
    display: flex;
  }
  p {
    padding: 10px;
    color: #6c7178;
    font-weight: bold;
  }
  input[type="checkbox"] {
    position: relative;
    width: 80px;
    min-height: 30px;
    background-color: whitesmoke;
    -webkit-appearance: none;
    border-radius: 20px;
    outline: none;
    transition: 0.4s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  input:checked[type="checkbox"] {
    background-color: #a5d4af;
  }
  input[type="checkbox"]::before {
    position: absolute;
    content: "";
    left: 0;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
    background-color: #4ca85e;
  }
  input:checked[type="checkbox"]::before {
    left: 45px;
  }
`;

export const ProductCode = styled.div`
  width: 185%;
  margin-top: 30px;
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: lightgray;
      /* font-size: 17px; */
    }
  }
`;

export const ProductSKU = styled.div`
  width: 185%;
  margin-top: 25px;
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: lightgray;
      /* font-size: 17px; */
    }
  }
`;

export const Gender = styled.div`
  width: 105%;
  margin-top: 25px;
  b {
    color: #6c7985;
  }
  span {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  input[name="gender"] {
    accent-color: green;
  }
  label {
    padding-left: 5px;
    font-weight: bold;
    margin-left: 10px;
    font-size: 13px;
  }
`;

export const PriceRegular = styled.div`
  width: 145%;
  p {
    position: absolute;
    left: 28px;
    bottom: 235px;
    padding: 8px;
    font-size: 13px;
    color: lightgray;
    border-radius: 50%;
    background-color: white;
  }
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: #c4c9d0;
      font-size: 17px;
    }
  }
`;

export const SalePrice = styled.div`
  width: 145%;
  p {
    position: absolute;
    left: 28px;
    bottom: 146px;
    padding: 8px;
    font-size: 13px;
    color: lightgray;
    border-radius: 50%;
    background-color: white;
  }
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: #c4c9d0;
      font-size: 17px;
    }
  }
`;

export const SelectProduct = styled.div`
  width: 170%;
  margin-top: 10px;
  p {
    position: absolute;
    left: 30px;
    bottom: 123px;
    padding: 8px;
    font-size: 13px;
    color: lightgray;
    border-radius: 50%;
    background-color: white;
  }
  select {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 10px;
    color: #c4c9d0;
    font-size: 17px;
    option {
      color: black;
      border: none;
    }
  }
`;

export const TagsProduct = styled.div`
  width: 170%;
  input {
    width: 100%;
    padding: 17px 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: #c4c9d0;
      font-size: 17px;
    }
  }
`;
export const Half = styled.div``;
