import { hostname } from "@/config/config";

export default async function GetUserAddress(userId) {
    const blob = await fetch(`${hostname}/address/getUserAddress/?userId=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { address } = await blob.json();
    return address;
}
