import React from "react";
import { addToDb, removeFromDb } from "../../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { _id, name, price } = props.cosmetic;

  const addToCart = (id) => {
    // console.log(id, "item added");
    // localStorage.setItem(id, 1);
    addToDb(id);
  };

  const addToCartWithPara = () => addToCart(_id);

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: $ {price}</p>
      <p>
        <small>it has id: {_id}</small>
      </p>
      {/* <button onClick={addToCartWithPara}>Add to Cart</button> */}
      {/* shortcut using wrapper function */}
      <button onClick={() => addToCart(_id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(_id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
