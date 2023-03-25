// use local storage to manage cart data

const addToDb = (id) => {
  let shoppingCart;

  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    // console.log(storedCart);
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // Add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    // localStorage.setItem(id, newQuantity);
    shoppingCart[id] = newQuantity;
  } else {
    // localStorage.setItem(id, 1);
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      // console.log("exist");
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart };
