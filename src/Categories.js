import "./style/Categories.css";
import "./style/Button.css";

export default function Categories({ products, setSortByCat }) {
  const unique = [...new Set(products.map((p) => p.category))];

  return (
    <ul className="cat-list mt">
      {unique.map((cat) => (
        <li>
          <button
            className={`btn-cat ${cat}`}
            onClick={(e) => setSortByCat(cat)}
          >
            {cat}
          </button>
        </li>
      ))}
      <li>
        {products.length > 0 ? (
          <button className={`btn-cat`} onClick={(e) => setSortByCat("all")}>
            Show All
          </button>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
}
