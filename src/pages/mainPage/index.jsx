import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentNavbar from "../../components/ContentNavbar";
import Navbar from "../../components/Navbar";
import CustomerPage from "../CustomerPage";
import DashboardPage from "../dashboardPage";
import MessagePage from "../MessagePage";
import OrdersPage from "../ordersPage";
import ProductsPage from "../productsPage";
import SettingsPage from "../SettingsPage";

function MainPage() {
  return (
    <>
      <ContentNavbar />   
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default MainPage;
