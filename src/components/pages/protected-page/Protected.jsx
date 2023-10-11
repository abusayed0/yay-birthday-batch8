import { useContext } from "react";
import { AuthContext } from "../../context-provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const Protected = ({ children }) => {
    const location = useLocation();
    const state = {
        from: location.pathname
    };
    const { loggedUser, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <BounceLoader
                color="tomato"
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={3}
            />
        </div>
    }
    else if (!loggedUser) {
        return <Navigate to="/login" state={state} replace={true} />
    }
    return children;
};
Protected.propTypes = {
    children: PropTypes.element.isRequired
};
export default Protected;