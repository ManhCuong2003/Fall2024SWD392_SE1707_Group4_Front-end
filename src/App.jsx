import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "./pages/commonPage/Homepage/Homepage";
import Login from "./pages/commonPage/Login/Login";
import Register from "./pages/commonPage/Register/Register";
import ProductDetailPage from "./pages/commonPage/ProductDetailPage/ProductDetailPage";
import CustomerDashboardPage from "./pages/customer/CustomerDashboardPage/CustomerDashboardPage";
import CartPage from "./pages/commonPage/CartPage/CartPage";
import CheckoutPage from "./pages/commonPage/CheckoutPage/CheckoutPage";
import KoiFishManagerList from "./components/KoiFishManagerList/KoiFishManagerList";
import NotAuthorized from "./authencation/NotAuthorized";
import RoleBasedRoute from "./authencation/RoleBasedRoute";

import StaffManagePage from "./pages/staff/StaffManagePage/StaffManagePage";

import NewsPage from "./pages/commonPage/NewsPage/NewsPage";
import ProductListPage from "./pages/commonPage/ProductListPage/ProductListPage";
import ConsignmentPage from "./pages/commonPage/ConsignmentPage/ConsignmentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotAuthorized} />

        <Route path="/" Component={homePage} />
        <Route path="/product-list" Component={ProductListPage} />
        <Route path="/detail-page/:id" Component={ProductDetailPage} />
        <Route path="/news" Component={NewsPage} />
        <Route path="/not-authorized" Component={NotAuthorized} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/cart-page" Component={CartPage}/>
        <Route path="/checkout-page" Component= {CheckoutPage}/>
        <Route path="/consignment" Component= {ConsignmentPage}/>
        <Route
          path="/koi-list"
          element={
            <RoleBasedRoute
              element={<KoiFishManagerList />}
              requiredRole={["manager"]}
            />
          }
        />

        <Route path="/customer-dashboard" Component={CustomerDashboardPage} />
        <Route path="/staff-manage-page" Component={StaffManagePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
