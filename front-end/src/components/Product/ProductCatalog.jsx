import { UncleChips } from "@/assets/ProductImages/SnacksMuchies";
import ProductCounter from "./ProductCounter";

export default function ProductCatalog() {
    return (
        <div className="col-lg-2 col-6 p-1">
            <div className="border bg-light-subtle p-2">
                <div>
                    <img className="col-12" src={UncleChips.src} alt="Check your internet connection" />
                </div>

                <h6 className="fw-semibold m-0 mt-md-3">Uncle Chipps Spicy Treat Flavour Potato Chips</h6>
                <p className="text-secondary-emphasis m-0">48 g</p>

                <div className="d-flex justify-content-around align-items-center">
                    <p className="fw-semibold m-0">₹ 63</p>
                    <ProductCounter />
                </div>
            </div>
        </div>
    );
}