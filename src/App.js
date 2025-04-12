import { useState } from "react";
import AddProductForm from "./AddProductForm";
import { SortedList } from "./ProductList";
import "./style/App.css";
import { ButtonAdd, ButtonSort } from "./Buttons";
import Categories from "./Categories";

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sortByCat, setSortByCat] = useState("all");
  const [sortBy, setSortBy] = useState("priceHigh");
  const [exp, setExp] = useState();

  return (
    <div className={products.length === 0 ? "wrapper" : ""}>
      <h1 className="mt">💄 My Makeup Bag</h1>
      <ButtonAdd showForm={showForm} setShowForm={setShowForm} />
      <Categories products={products} setSortByCat={setSortByCat} />

      {showForm && (
        <AddProductForm
          setProducts={setProducts}
          products={products}
          setExp={setExp}
          exp={exp}
          setShowForm={setShowForm}
        />
      )}

      <ButtonSort setSortBy={setSortBy} sortBy={sortBy} products={products} />

      <SortedList
        products={products}
        sortByCat={sortByCat}
        sortBy={sortBy}
        setProducts={setProducts}
      />
    </div>
  );
}

export default App;
