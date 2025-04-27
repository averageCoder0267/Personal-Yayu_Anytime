import { hostname } from "@/config/config";

export default async function AddUserAddress(obj) {
    const blob = await fetch(`${hostname}/address/addUserAddress`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });
    const { address } = await blob.json();
    return address;
}
