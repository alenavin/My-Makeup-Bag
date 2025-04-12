import { useState } from "react";
import rhode from "./img/rhode.webp";
import "./style/Form.css";

export default function AddProductForm({
  products,
  setProducts,
  exp,
  setExp,
  setShowForm,
}) {
  const [usedTimes, setUsedTimes] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();

  function handleAdd(e) {
    e.preventDefault();

    if (!name || !price) return;

    const newProduct = {
      id: crypto.randomUUID(),
      image: rhode,
      name,
      category,
      price,
      usedTimes,
      expDate: exp,
    };

    setProducts((prev) => [...prev, newProduct]);
    console.log(products);

    setName("");
    setCategory("");
    setPrice("");
    setUsedTimes("");
    setExp();

    setShowForm((prev) => !prev);
  }

  return (
    <div className="form mt">
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Category</label>
          <select
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled></option>
            <option value="mascara">Mascara</option>
            <option value="foundation">Foundation</option>
            <option value="powder">Powder</option>
            <option value="contour">Contour</option>
            <option value="highlighter">Highlighter</option>
            <option value="blush">Blush</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="brows">For brows</option>
            <option value="primer">Primer</option>
          </select>
        </div>
        <div>
          <label>Initial price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="enter price (RUB)"
          ></input>
        </div>
        <div>
          <label>Used (times)</label>
          <input
            type="number"
            value={usedTimes}
            onChange={(e) => setUsedTimes(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label>Expiration date</label>
          <input
            type="month"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
          ></input>
        </div>
        <button className="btn" onClick={handleAdd}>
          Add ✅
        </button>
      </form>
    </div>
  );
}
