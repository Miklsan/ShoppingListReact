import React from "react"

const AddPopularProducts = (props) => {
    const populars = ["sel", "sucre", "pain", "lait", "beurre", "huile"];
    const { shopping, addToShoppingList } = props;
    /* const handleClick = (product) => {
    setShopping([...shopping, product]);
    } */
    console.log(shopping);

    return (
        <div className="mb-3 d-flex align-items-center">
            Avez vous besoin de :
            {populars.map((el) => (
                <button
                    type="button"
                    key={el}
                    className="btn btn-dark mx-1"
                    disabled={shopping.includes(el)}
                    onClick={() => addToShoppingList(el)}
                >
                    {el}
                </button>
            ))}
      ?
        </div>
    );
}

export default AddPopularProducts