import React from "react";
import {
  Container,
  Content,
  ContentDate,
  ContentIcon,
  ContentTwo,
  DflexBox,
  DFlexOrders,
  FullDant,
  PageWrapper,
} from "./styles";
import download from "../../assets/icons/download.svg";
import calendar from "../../assets/icons/calendar.svg";
import FourChildren from "../../components/FourChildren";
import ChartAnalytics from "../../components/ChartsAnalytics";
import CircleCharts from "../../components/CircleCharts";
import RecentOrders from "../../components/RecentOrders";
import BallChart from "../../components/BallChart";
import TextRecend from "../../components/TextRecend";

function DashboardPage() {
  return (
    <PageWrapper>
      <Container>
        <DflexBox>
          <Content>
            <p>Dashboard</p>
          </Content>
          <ContentTwo>
            <ContentIcon>
              <img src={download} />
              <p>Download report</p>
            </ContentIcon>
            <ContentDate>
              <img src={calendar} />
              <p>6 April, 2021</p>
            </ContentDate>
          </ContentTwo>
        </DflexBox>
      </Container>
      <FourChildren />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FullDant>
        <ChartAnalytics />
        <CircleCharts />
      </FullDant>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextRecend />
      <br />
      <br />
      <DFlexOrders>
        <RecentOrders />
        <BallChart />
      </DFlexOrders>
    </PageWrapper>
  );
}

export default DashboardPage;
