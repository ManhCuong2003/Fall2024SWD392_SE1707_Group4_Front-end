import PropTypes from 'prop-types'
import Login from '../pages/commonPage/Login/Login';
import NotAuthorized from './NotAuthorized';
import { Navigate } from 'react-router-dom';

function RoleBasedRoute({element: Component, requiredRole, ...rest}) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if(!token){
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        return <Login/>
    }

    switch (role){
        case "customer":
            if(requiredRole && !requiredRole.includes(role)){
                return <NotAuthorized/>
            }
            break;
        
        case "staff":
            if(requiredRole && !requiredRole.includes(role)){
                return <NotAuthorized/>
            }
            break;
        
        case "manager":
            if(requiredRole && !requiredRole.includes(role)){
                return <NotAuthorized/>
            }
            break;
            
        default:
            return <Navigate to="/"/>
    }
  return <Component {...rest} />
}
RoleBasedRoute.propTypes = {
    element: PropTypes.elementType.isRequired, 
    requiredRole: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RoleBasedRoute
