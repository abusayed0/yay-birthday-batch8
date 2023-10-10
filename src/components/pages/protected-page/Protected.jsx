import { useContext } from "react";
import { AuthContext } from "../../context-provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({children}) => {
    const location = useLocation();
    const state = {
        from : location.pathname
    };
    const {loggedUser, isLoading} = useContext(AuthContext);
    if(isLoading){
        return <p>Loading</p>
    }
    else if(!loggedUser){
        return <Navigate to="/login" state={state} replace={true}/>
    }
    return children;
};
Protected.propTypes = {
    children : PropTypes.element.isRequired
};
export default Protected;