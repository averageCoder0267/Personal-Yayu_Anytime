import { hostname } from "@/config/config";

export default function SendMail(email, randomCode) {
    fetch(`${hostname}/auth/send-mail`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ to: email, randomCode })
    })
}