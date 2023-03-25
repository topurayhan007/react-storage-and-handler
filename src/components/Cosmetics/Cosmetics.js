import React, { useEffect, useState } from "react";
import { add } from "../../utilities/calculate";
import Cosmetic from "./Cosmetic/Cosmetic";
// import add from "../../utilities/calculate";

const Cosmetics = () => {
  /* const first = 55;
  const second = 66;
  const total = add(first, second); */
  /* const cosmetics = [
    { id: 1, name: "Alta", price: 100 },
    { id: 2, name: "Palis", price: 200 },
    { id: 3, name: "Malis", price: 300 },
    { id: 4, name: "Balis", price: 400 },
    { id: 5, name: "Nalis", price: 500 },
  ] */
  /* const cosmetics = [
    {
      _id: "641ed95aee927767ffee4e9e",
      price: 142,
      name: "Eileen Sweet",
    },
    {
      _id: "641ed95ac114c121340b3728",
      price: 551,
      name: "Barrera Velez",
    },
    {
      _id: "641ed95a76437182b3fad979",
      price: 235,
      name: "Gibson Alvarado",
    },
    {
      _id: "641ed95ac992429addfc36f0",
      price: 247,
      name: "Laurie Potter",
    },
    {
      _id: "641ed95af14569c46278a622",
      price: 531,
      name: "Vang Flowers",
    },
  ]; */

  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
