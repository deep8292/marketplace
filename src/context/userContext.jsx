import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const updateUserLoggedIn = () => {
        console.log('I am here');
        setLoggedIn(true);
    }

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
        setCartCount((prevCount) => prevCount + 1);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
        setCartCount((prevCount) => prevCount - 1);
    };

    const emptyCart = () => {
        setCartItems([]);
        setCartCount(0);
    }


    return (
        <UserContext.Provider value={{
                loggedIn, 
                setLoggedIn,
                cartCount,
                cartItems,
                addToCart,
                removeFromCart,
                emptyCart,
                updateUserLoggedIn
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;


