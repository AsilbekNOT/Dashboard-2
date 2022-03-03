import React from "react";
import ProductCart from "../../components/ProductCard";
import { PageWrapper } from "../dashboardPage/styles";

function ProductsPage() {
  return (
    <>
      <PageWrapper>
        <ProductCart />
      </PageWrapper>
    </>
  );
}

export default ProductsPage;
