import { createContext } from "react";
import { BASE_URL } from "./constants.js";
import useFetch from "../Components/useFetch/useFetch";


export const ShopRandomProductsContext = createContext(null);

const ShopRandomProductsContextProvider = (props) => {
    const { data, loading } = useFetch(`${BASE_URL}/api/products/randomly`);

    const contextValue = { loading, data };

    return (
        <ShopRandomProductsContext.Provider value={contextValue}>
            {props.children}
        </ShopRandomProductsContext.Provider>
    )

}

export default ShopRandomProductsContextProvider;