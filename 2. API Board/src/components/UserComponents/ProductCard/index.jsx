import "./index.scss";
import {MdClose} from "react-icons/md";

function ProductCard({ product, onDelete }) {
    return (
        <div className="col-3 col-md-3 col-sm-6 col-xs-6">
            <section id="productCard">

                <div
                    className="deleteCircle"
                    onClick={() => onDelete(product.id)}
                >
                    <MdClose/>
                </div>

                <div className="imgWrapper">
                    <img src={product.image} alt={product.title} />
                </div>

                <h4>{product.title}</h4>

                <p className="description">
                    {product.description}
                </p>

                <div className="price-row">
                    <span className="price">${product.price}</span>
                    <span className="category">{product.category}</span>
                </div>
            </section>
        </div>
    );
}

export default ProductCard;
