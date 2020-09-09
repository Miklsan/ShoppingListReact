import React from "react"
import AddPopularProducts from "./AddPopularProducts"
import ShoppingList from "./ShoppingList"
import AddProductForm from "./AddProductForm"

const ShoppingApp = (props) => {
    const [shopping, setShopping] = React.useState([]);

    const addToShoppingList = (product) => {
        setShopping([...shopping, product]);
    };

    const removeFromShoppingList = (product) => {
        setShopping(shopping.filter((el) => el !== product));
    };

    return (<section>
        <h2>Produits à acheter</h2>
        <AddPopularProducts
            shopping={shopping}
            addToShoppingList={addToShoppingList} />
        <ShoppingList
            shopping={shopping}
            removeFromShoppingList={removeFromShoppingList} />
        <AddProductForm
            shopping={shopping}
            addToShoppingList={addToShoppingList} />
    </section>)
}

export default ShoppingApp