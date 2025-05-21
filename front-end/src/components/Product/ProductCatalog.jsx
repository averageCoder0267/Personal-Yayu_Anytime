
import ProductCounter from "./ProductCounter";

export default function ProductCatalog({ product }) {

    return (
        <div className="col-lg-2 col-6 p-1 ">
            <div className="border bg-light-subtle d-flex flex-column justify-content-between h-100 p-2">
                <div>
                    <img className="col-12"
                        src={product.image} alt="Check your internet connection" />
                </div>

                <h6 className="fw-semibold m-0 mt-md-3">{product.name}</h6>
                <p className="text-secondary-emphasis m-0">{product.unit}</p>

                <div className="d-flex justify-content-around align-items-end">
                    <p className="fw-semibold m-0">₹ {product.price}</p>
                    <ProductCounter max_limit={product.quantity} product={product} />
                </div>
            </div>
        </div>
    );
}