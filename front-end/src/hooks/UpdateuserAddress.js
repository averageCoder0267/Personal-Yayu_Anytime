import { hostname } from "@/config/config";

export default function UpdateUserAddress(addressId, obj) {
    fetch(`${hostname}/address/updateUserAddress/?addressId=${addressId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });
}
