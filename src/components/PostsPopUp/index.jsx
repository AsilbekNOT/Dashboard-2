import React from "react";
import {
  AddImages,
  ButtonActive,
  DescriptionInput,
  Form,
  Gender,
  Half,
  PopUpApply,
  PopUpBg,
  PopUpBox,
  PopUpDick,
  PriceRegular,
  ProductCode,
  ProductNameInput,
  ProductSKU,
  SalePrice,
  SelectProduct,
  TagsProduct,
  TickAnimation,
} from "./styles";

import PingerPng from "../../assets/img/picture.png";
import { useDispatch } from "react-redux";
import { addAction } from "../../redux/modules/Product/ProductAction";

function PostsPopUp({ PopUp, setPopUp }) {
  const dispatch = useDispatch();

  const submitProduct = (e) => {
    e.preventDefault();
    const {
      name: { value: name },
      price: { value: price },
      description: { value: description },
    } = e.target;

    const form = {
      name,
      price,
      description,
    };

    dispatch(addAction(form));
  };

  return (
    <>
      <Form onSubmit={submitProduct}>
        <table>
          <PopUpBg onClick={() => setPopUp({ active: false, id: 0 })} />
          {/* /// */}
          {/* This is Pop Dick */}
          {/* /// */}
          <PopUpDick>
            <Half>
              <TickAnimation>
                <div>
                  <input type="checkbox" />
                  <p>In Stock</p>
                </div>
              </TickAnimation>
              <ProductCode>
                <input type="name" placeholder="Product Code" required />
              </ProductCode>
              <ProductSKU>
                <input type="name" placeholder="Product SKU" required />
              </ProductSKU>

              <Gender>
                <b>Gender</b>
                <span>
                  <div>
                    <input type="radio" name="gender" />
                    <label>Men</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" />
                    <label>Women</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" />
                    <label>Kids</label>
                  </div>
                </span>
                <br />

                <SelectProduct>
                  <p>Category</p>
                  <select name="select">
                    <option value="value1">T-Shirts</option>
                    <option value="value2" selected>
                      T-Valadas
                    </option>
                    <option value="value2" selected>
                      T-Kurtka
                    </option>
                    <option value="value3">Tugadi</option>
                  </select>
                </SelectProduct>
                <br />
                <TagsProduct>
                  <input type="text" placeholder="Toy Story 3" />
                </TagsProduct>
              </Gender>
            </Half>
          </PopUpDick>
          {/* /// */}
          {/* This is Pop Box */}
          {/* /// */}
          <PopUpBox>
            <Half>
              <ProductNameInput>
                <input type="name" placeholder="Product Name" required />
              </ProductNameInput>
              <DescriptionInput>
                <p>Description</p>
                <textarea placeholder="Write something awesome..."></textarea>
              </DescriptionInput>
              <AddImages>
                <p>Add Images</p>
                <label htmlFor="img">
                  <img src={PingerPng} />
                </label>
                <span>
                  <input type="file" id="img" />{" "}
                </span>
                <div>
                  <p>Drop or Select file</p>
                  <b>
                    Drop files here or click <span> browse </span> thorough your
                    machine
                  </b>
                </div>
              </AddImages>
            </Half>
          </PopUpBox>
          {/* /// */}
          {/* This is PopUp Apply */}
          {/* /// */}
          <PopUpApply>
            <Half>
              <PriceRegular>
                <p> Regular Price</p>
                <input type="price" placeholder="$ 0.00" required />
              </PriceRegular>
              <br />
              <br />
              <SalePrice>
                <p> Sale price</p>
                <input type="price" placeholder="$ 0.00" required />
              </SalePrice>
              <br />
              <br />
              <TickAnimation>
                <div>
                  <input type="checkbox" />
                  <p>Price includes taxes</p>
                </div>
              </TickAnimation>
            </Half>
          </PopUpApply>
          <ButtonActive>
            <input type="submit" value={"Create Product"} />
          </ButtonActive>
        </table>
      </Form>
    </>
  );
}

export default PostsPopUp;
