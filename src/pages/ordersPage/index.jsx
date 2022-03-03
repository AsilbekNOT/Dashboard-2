import React, { useState } from "react";
import {
  Container,
  Content,
  ContentDate,
  ContentTwo,
  DflexBox,
  PageWrapper,
} from "../dashboardPage/styles";
import FourTick from "../../components/FourTick";
import { ButtonCreate } from "./styles";
import NeedTableForPageTwo from "../../components/NeedTableForPageTwo";
import PostsPopUp from "../../components/PostsPopUp";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import NeedDisplayFlexForPageTwo from "../../components/NeedDisplayFlexForPageTwo";

function OrdersPage() {
  const [popUp, setPopUp] = useState({ active: false, id: 0 });

  return (
    <Provider store={store}>
      <PageWrapper>
        <Container>
          <DflexBox>
            <Content>
              <div>
                <p>Order</p>
                <b>15 Orders found</b>
              </div>
            </Content>
            <ContentTwo>
              <ButtonCreate onClick={() => setPopUp({ active: true, id: 0 })}>
                <button>Create</button>
              </ButtonCreate>
            </ContentTwo>
          </DflexBox>
        </Container>
        <FourTick />
        <br />
        <NeedTableForPageTwo />
        <br />
        <NeedDisplayFlexForPageTwo/>
        {popUp.active ? <PostsPopUp popUp={popUp} setPopUp={setPopUp} /> : ""}
      </PageWrapper>
    </Provider>
  );
}

export default OrdersPage;
