import { createContext } from "react";
import useFetch from "../Components/useFetch/useFetch";


export const ShopRandomProductsContext = createContext(null);

const ShopRandomProductsContextProvider = (props) => {
    const { data, loading } = useFetch("http://127.0.0.1:8800/api/products/randomly");

    const contextValue = { loading, data };

    return (
        <ShopRandomProductsContext.Provider value={contextValue}>
            {props.children}
        </ShopRandomProductsContext.Provider>
    )

}

export default ShopRandomProductsContextProvider;