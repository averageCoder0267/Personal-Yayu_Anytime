"use client"
import GetUserAddress from "@/hooks/GetUserAddress";
import { createContext, useEffect, useReducer } from "react"

export const AddressContext = createContext();

let initialState = {
    locations: [],
    selected: 0
};

function addressReducer(state, action) {
    switch (action.type) {
        case "USER_ADDRESS":
            return { ...state, locations: [...action?.payload] };
        case "USER_ADDRESS_AND_SELECTION":
            return { locations: [...action?.payload?.locations], selected: action?.payload?.selected }
        case "USER_ADDRESS_SELECTOR":
            return { ...state, selected: action?.payload }
        default:
            return state;
    }
}

export default function AddressProvider({ children }) {

    const [state, dispatch] = useReducer(addressReducer, initialState);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const user = JSON.parse(localStorage.getItem("YayuAnytime"));
        const userId = user?.auth?.userId;
        if (userId) {
            const address = await GetUserAddress(userId);
            dispatch({
                type: "USER_ADDRESS",
                payload: address
            });
        }
    }

    return (
        <AddressContext.Provider value={{ address: state, addressDispatch: dispatch }}>
            {children}
        </AddressContext.Provider>
    )
}