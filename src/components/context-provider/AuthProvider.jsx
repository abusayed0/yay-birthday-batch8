import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/initailize-firebase-authentication";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const emailPassLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogIn = () => {
       return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoggedUser(currentUser);
            console.log("current user inside auth state");
            setIsLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);
    const contextValue = {
        loggedUser,
        isLoading,
        createUser,
        emailPassLogin,
        logOut,
        googleLogIn
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
};
export default AuthProvider;