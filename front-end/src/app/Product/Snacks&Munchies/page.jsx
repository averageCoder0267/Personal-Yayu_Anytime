import ProductGrid from "@/components/Product/ProductGrid"
import { lexend } from "@/fonts"

export default function SnackMunchiesPage() {
    return (
        <div className={`${lexend.className} p-2`}>
            <h4 className="border rounded-2 bg-light-subtle fw-semibold p-2">Buy Chips & Crisps Online</h4>
            <ProductGrid />
        </div>
    );
}
