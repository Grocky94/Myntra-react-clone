import React from "react"
import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react'

export const MyContext = createContext();

const initialValue = {user: null};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }

}
const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    useEffect(() => {
        async function currentUser() {
            const token = JSON.parse(localStorage.getItem("token"))
            const response = await axios.post("http://localhost:4000/get-current-user", { token })
            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user
                })
            } else {
                dispatch({
                    type: "LOGOUT"
                })
            }
        }
        currentUser()
    }, [])

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;