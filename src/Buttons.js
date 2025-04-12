import "./style/Button.css";

export function ButtonAdd({ showForm, setShowForm }) {
  function handleAdd() {
    setShowForm((prev) => !prev);
  }
  return (
    <button className="btn mt" onClick={handleAdd}>
      {showForm ? "Hide Form" : "Add New Product"}
    </button>
  );
}

export function ButtonSort({ sortBy, setSortBy, products }) {
  return (
    <div>
      {products.length > 1 ? (
        <select
          className="btn mt"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by:</option>
          <option value="exp">Expiry date</option>
          <option value="priceLow">Price p/Use: low</option>
          <option value="priceHigh">Price p/Use: high</option>
          <option value="mostUsed">Most used</option>
          <option value="lessUsed">Less used</option>
        </select>
      ) : (
        ""
      )}
    </div>
  );
}

export function AddUse({ productId, setProducts }) {
  function handleAddUse() {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, usedTimes: product.usedTimes + 1 }
          : product
      )
    );
  }
  return (
    <button className="btn" onClick={handleAddUse}>
      Add Use ➕
    </button>
  );
}
