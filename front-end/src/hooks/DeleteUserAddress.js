import { hostname } from "@/config/config";

export default function DeleteUserAddress(addressId) {
    fetch(`${hostname}/address/deleteUserAddress/?addressId=${addressId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
}