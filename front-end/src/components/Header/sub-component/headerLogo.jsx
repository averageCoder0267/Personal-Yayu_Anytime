import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href="/" id="yayuAnytimeBox" className="border col-lg-2 d-lg-flex d-none justify-content-center align-items-center text-decoration-none">
            <h3 className="text-warning fw-bold m-0">Yayu</h3>
            <h3 className="text-success fw-bold m-0">Anytime</h3>
        </Link>
    )
}