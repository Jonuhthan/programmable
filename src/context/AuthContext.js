import React, { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Sign-in successful.");
        } catch (error) {
            console.log(error);
        }
    };

    const googleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("Sign-out successful.");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        // global context, all children receive state
        <AuthContext.Provider value={{ googleSignIn, googleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};