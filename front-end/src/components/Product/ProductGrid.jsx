
import GetProductsByCategory from "@/hooks/GetProductsByCategory";
import ProductCatalog from "./ProductCatalog";
import CartBar from "../Cart/CartBar";

export default async function ProductGrid() {

    const products = await GetProductsByCategory('Snacks_Munchies');

    return (
        <div className="row col-12 mx-auto">
            {
                products.map((element, index) => {
                    return (
                        <ProductCatalog key={index} product={element} />
                    )
                })
            }
            <CartBar />
        </div>
    );
}
