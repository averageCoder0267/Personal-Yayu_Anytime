"use client"
import { createContext, useReducer } from "react";

export const User = createContext();

let initialState = {
    email: "",
    userId: "",
    isLoggedin: true
}

function userReducer(state, action) {
    switch (action.type) {
        case "USER_MAIL":
            return { ...state, email: action.payload }
        case "USER_ID":
            return { ...state, userId: action.payload }
    }
}


export default function UserProvider({ children }) {

    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <User.Provider value={{ user: state, userDispatch: dispatch }}>
            {children}
        </User.Provider>
    )
}