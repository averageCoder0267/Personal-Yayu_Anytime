import Link from "next/link";

export default function UserAccount() {
    return (
        <div className="d-lg-none d-block col-12 px-5 py-4">
            <h3 className="m-0">My Account</h3>
            <p className="text-primary-emphasis m-0">yashjain02.dev@gmail.com</p>
            <div className="mt-2">
                <h6 className="fw-normal fs-4 m-0 py-4">
                    <Link href="/Account/Address"
                        className="text-dark text-decoration-none">
                        <i className="bi bi-geo-alt pe-2" /> My Addresses
                    </Link>
                </h6>
                <h6 className="fw-normal fs-4 m-0 py-4">
                    <Link href="/"
                        className="text-dark text-decoration-none">
                        <i className="bi bi-box pe-2" /> My Orders
                    </Link>
                </h6>
                <h6 className="fw-normal fs-4 m-0 py-4">
                    <Link href="/"
                        className="text-dark text-decoration-none">
                        <i className="bi bi-gift pe-2" /> E-Gift Cards
                    </Link>
                </h6>
                <h6 className="fw-normal fs-4 m-0 py-4">
                    <Link href="/"
                        className="text-dark text-decoration-none">
                        <i className="bi bi-shield-lock pe-2" /> Account Privacy
                    </Link>
                </h6>
                <h6 className="fw-normal fs-4 m-0 pt-4">
                    <Link href="/"
                        className="text-dark text-decoration-none">
                        <i className="bi bi-shield-lock pe-2" /> Logout
                    </Link>
                </h6>
            </div>
        </div>
    )
}