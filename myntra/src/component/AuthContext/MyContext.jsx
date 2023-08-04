
import { createContext, useReducer } from 'react'

export const MyContext = createContext();

const initialValue = { user: null, product: [] };

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

        case "ADDPRODUCT":
            return {
                ...state,
                products: {
                    ...state,
                    product: action.payload
                }
            }
        default:
            return state;
    }

}
const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const LOGIN = (userData) => {
        localStorage.setItem("currentuser", JSON.stringify(userData));
        if (userData) {
            dispatch({
                type: "LOGIN",
                payload: userData,
            })

        }
    }
    const LOGOUT = () => {
        localStorage.removeItem("currentuser");
        dispatch({
            type: "LOGOUT"
        })
    }
    const ADDPRODUCT = (productData) => {
        localStorage.setItem("product", JSON.stringify(productData))
        dispatch({
            type: "ADDPRODUCT",
            payload: productData
        })
    }
    return (
        <MyContext.Provider value={{ state, LOGIN, LOGOUT, ADDPRODUCT }}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;