import { useState } from "react";
import Item from "./Item";
import "./style/List.css";

export function SortedList({ products, sortByCat, sortBy, setProducts }) {
  let sortedByCat;
  if (sortByCat === "all") {
    sortedByCat = products;
  } else {
    sortedByCat = products.filter((product) => product.category === sortByCat);
  }

  let sorted2;

  let sort_functions = {
    priceLow: (a, b) =>
      Number(a.price / a.usedTimes) - Number(b.price / b.usedTimes),
    priceHigh: (a, b) =>
      Number(b.price / b.usedTimes) - Number(a.price / a.usedTimes),
    mostUsed: (a, b) => Number(b.usedTimes) - Number(a.usedTimes),
    lessUsed: (a, b) => Number(a.usedTimes) - Number(b.usedTimes),
    exp: (a, b) => Number(a.expDate) - Number(b.expDate),
  };

  sorted2 = sortedByCat.slice().sort(sort_functions[sortBy]);

  return (
    <div className="list mt">
      <ul>
        {sorted2.map((product) => (
          <Item product={product} key={product.id} setProducts={setProducts} />
        ))}
      </ul>
    </div>
  );
}
