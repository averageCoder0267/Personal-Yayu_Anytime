import { hostname } from "@/config/config";

export default async function GetProductsByCategory(category) {
    const blob = await fetch(`${hostname}/product/getProductsByCategory/?category=${category}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { products } = await blob.json();
    return products;
}