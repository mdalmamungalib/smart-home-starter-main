import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProductsData = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const saveCart = getStoredCart();
    const initialCart = [];
    for (const id in saveCart) {
        const foundProducts = products.find(product => product.id === id);
        if (foundProducts) {
            const quantity = saveCart[id];
            foundProducts.quantity = quantity;
            initialCart.push(foundProducts);
        }
    }
    return { products, initialCart };
}