"use client"
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

let initialState = {
    email: "",
    userId: "",
    isLoggedin: false
}

function authReducer(state, action) {
    switch (action.type) {
        case "USER_MAIL":
            return { ...state, email: action.payload };
        case "USER_ID":
            return { ...state, userId: action.payload };
        case "USER_LOGIN":
            return { ...state, isLoggedin: action.payload };
        case "USER_AUTH":
            return { ...action.payload };
        default:
            return state;
    }
}



export default function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("YayuAnytime"));
        if (user?.auth) {
            dispatch({
                type: "USER_AUTH",
                payload: user.auth
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth: state, authDispatch: dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}