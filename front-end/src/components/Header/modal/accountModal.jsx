"use client"
import { AuthContext } from "@/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

export default function AccountModal({ back }) {

    const { auth } = useContext(AuthContext);

    return (
        <section className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            <div className="bg-light col-5 rounded-5 p-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="m-0">My Account</h3>
                    <button onClick={back} className="btn btn-close fs-5"></button>
                </div>
                <p className="text-primary-emphasis m-0">{auth?.email}</p>
                <div className="mt-3">
                    <h6 className="fw-normal fs-5 m-0 py-3">
                        <Link href="/" onClick={back}
                            className="text-dark text-decoration-none">
                            <i className="bi bi-box pe-2" /> My Orders
                        </Link>
                    </h6>
                    <h6 className="fw-normal fs-5 m-0 py-3">
                        <Link href="/Account/Address" onClick={back}
                            className="text-dark text-decoration-none">
                            <i className="bi bi-geo-alt pe-2" /> Saved Addresses
                        </Link>
                    </h6>
                    <h6 className="fw-normal fs-5 m-0 py-3">
                        <Link href="/" onClick={back}
                            className="text-dark text-decoration-none">
                            <i className="bi bi-gift pe-2" /> E-Gift Cards
                        </Link>
                    </h6>
                    <h6 className="fw-normal fs-5 m-0 py-3">
                        <Link href="/" onClick={back}
                            className="text-dark text-decoration-none">
                            <i className="bi bi-shield-lock pe-2" /> Account Privacy
                        </Link>
                    </h6>
                    <h6 className="fw-normal fs-5 m-0 pt-3">
                        <Link href="/" onClick={back}
                            className="text-dark text-decoration-none">
                            <i className="bi bi-shield-lock pe-2" /> Logout
                        </Link>
                    </h6>
                </div>
            </div>
        </section>
    )
}