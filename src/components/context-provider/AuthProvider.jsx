import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const contextValue = {loggedUser};
    return (
        <AuthContext.Provider value={contextValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children : PropTypes.element.isRequired
};
export default AuthProvider;