import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const productContext = createContext([]);
export const cartContext = createContext([]);

const Root = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    return (
        <productContext.Provider value={products}>
            <cartContext.Provider value={[cart, setCart]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </cartContext.Provider>
        </productContext.Provider>

    );
};

export default Root;