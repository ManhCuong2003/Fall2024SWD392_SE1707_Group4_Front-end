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
import SalesReportPage from "./pages/commonPage/SalesReportPage/SalesReportPage";
import FarmManager from "./pages/commonPage/Inventory/FarmManager";
import { UserProvider } from "./components/Context/UserContext";
import ReadMore from "./components/NewsPageContent/ReadMore";
import ConsignCheckOut from "./pages/commonPage/ConsignCheckout/ConsignCheckout";
import ConsignmentPage from "./pages/commonPage/ConsignmentPage/ConsignmentPage";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Not Authorized page */}
          <Route path="*" Component={NotAuthorized} />

          {/* Authorized */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />

          {/* Public page */}
          <Route path="/not-authorized" Component={NotAuthorized} />
          <Route path="/" Component={homePage} />
          <Route path="/product-list" Component={ProductListPage} />
          <Route path="/detail-page/:id" Component={ProductDetailPage} />
          <Route path="/news" Component={NewsPage} />

          {/* Customer page */}
          <Route
            path="/cart-page"
            element={
              <RoleBasedRoute
                element={<CartPage />}
                requiredRole={["customer"]}
              />
            }
          />
          <Route
            path="/checkout-page"
            element={
              <RoleBasedRoute
                element={<CheckoutPage />}
                requiredRole={["customer"]}
              />
            }
          />

          <Route
            path="/checkout-consign"
            element={
              <RoleBasedRoute
                element={<ConsignCheckOut />}
                requiredRole={["customer"]}
              ></RoleBasedRoute>
            }
          />

          <Route
            path="/customer-dashboard"
            element={
              <RoleBasedRoute
                element={<CustomerDashboardPage />}
                requiredRole={["customer"]}
              />
            }
          />

          <Route
            path="/consignment"
            element={
              <RoleBasedRoute
                element={<ConsignmentPage />}
                requiredRole={["customer"]}
              />
            }
          />

          {/* Staff page */}
          <Route
            path="/staff-manage-page"
            element={
              <RoleBasedRoute
                element={<StaffManagePage />}
                requiredRole={["staff"]}
              />
            }
          />

          {/* Manager page */}
          <Route
            path="/koi-list"
            element={
              <RoleBasedRoute
                element={<KoiFishManagerList />}
                requiredRole={["manager"]}
              />
            }
          />

          <Route path="/farm-manager" Component={FarmManager} />
          <Route path="/read-more" Component={ReadMore} />
          <Route path="/sales-report-page" Component={SalesReportPage} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
