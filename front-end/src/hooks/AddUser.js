import { hostname } from "@/config/config";

export default async function AddUser(email) {
    const blob = await fetch(`${hostname}/user/addUser?email=${email}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const { userId } = await blob.json();
    return userId;
}