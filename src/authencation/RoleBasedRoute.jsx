import PropTypes from "prop-types";
import Login from "../pages/commonPage/Login/Login";
import NotAuthorized from "./NotAuthorized";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../components/Context/UserContext";

function RoleBasedRoute({ element, requiredRole, ...rest }) {
  const { user } = useContext(userContext);
  const role = user?.role_name;
  if (!user) {
    localStorage.removeItem("access_token");
    return <Login />;
  }

  switch (role) {
    case "customer":
      if (requiredRole && !requiredRole.includes(role)) {
        return <NotAuthorized />;
      }
      break;

    case "staff":
      if (requiredRole && !requiredRole.includes(role)) {
        return <NotAuthorized />;
      }
      break;

    case "manager":
      if (requiredRole && !requiredRole.includes(role)) {
        return <NotAuthorized />;
      }
      break;

    default:
      return <Navigate to="/" />;
  }
  return element;
}
RoleBasedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  requiredRole: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoleBasedRoute;
