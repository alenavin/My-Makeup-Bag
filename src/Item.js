import "./style/Item.css";
import "./style/Categories.css";
import { AddUse } from "./Buttons";

export default function Item({ product, setProducts }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={product.image} alt="item"></img>
      </div>

      <div className="card__info">
        <h3>{product.name}</h3>
        <div className="card__description">
          <p className={product.category}>{product.category}</p>
          <div className="card__description-price">
            {(product.price / product.usedTimes).toFixed(2)} RUB/per use
          </div>
          <div className="card__description-price">Exp: {product.expDate}</div>
        </div>
        <div className="card__usage">
          <AddUse setProducts={setProducts} productId={product.id} />
          <span>Used: {product.usedTimes} times</span>
        </div>
      </div>
    </div>
  );
}
