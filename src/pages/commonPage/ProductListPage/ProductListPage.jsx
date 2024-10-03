import React from "react";
import Nav from "../../../layouts/Header/Nav";
import ProductListPageContent from "../../../components/ProductListPageContent/ProductListPageContent";
import Footer from "../../../layouts/Footer/Footer";




const ProductListPage = () => {
  

  return (
    <div>
        <Nav></Nav>
        <ProductListPageContent/>
        <Footer/>
    </div>
  );
};

export default ProductListPage;