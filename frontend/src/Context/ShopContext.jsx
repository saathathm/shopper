import React, { createContext, useEffect, useState } from "react";
import useFetch from "../Components/useFetch/useFetch";

export const ShopContext = createContext(null);




const ShopContextProvider = (props) => {
    const [gotData, setGotData] = useState(['women']);
    const get_related_products_link = "http://127.0.0.1:8800/api/products/related/" + gotData[0] + "/" + gotData[1];
    const get_related_products = useFetch(get_related_products_link);
    const get_women_popular = useFetch("http://127.0.0.1:8800/api/products/women-popular");
    const { data, loading } = useFetch("http://127.0.0.1:8800/api/products");


    const data2 = [
        { _id: '655f41fdfd5c95a957dfee63', name: 'Product 1', price: 20 },
        { _id: '65605d6afd5c95a957dfee65', name: 'Product 2', price: 30 },
        // Add more products as needed
    ];

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < data.length; index++) {
            cart[data[index]._id] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState();

    useEffect(() => {
        setCartItems(getDefaultCart())
    }, [data]);


    const addToCart = (itemId) => {
        { setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = data.find((product) => product._id == item);
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const [womenPopular, setWomenPopular] = useState([]);

    useEffect(() => {
        async function getWomenPopular() {
            const { loading, data } = get_women_popular;
            if (!loading) {
                setWomenPopular(data);
            }
        }
        getWomenPopular();
    }, [get_women_popular]);

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        async function getRelatedProducts() {
            const { loading, data } = get_related_products;


            if (!loading) {
                setRelatedProducts(data);
            }
        }
        getRelatedProducts();
    }, [get_related_products]);

    const contextValue = { loading, data, cartItems, womenPopular, relatedProducts, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, setGotData };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;