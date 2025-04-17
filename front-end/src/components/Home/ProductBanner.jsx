"use client"
import Banner from "@/assets/Banner"
import Link from "next/link"

export default function ProductBanner() {

    return (
        <div className="px-md-4 px-sm-1 px-1 py-1">
            <Link href="/">
                <img role="button" src={Banner.PaanCorner.src} alt="Check your internet connection" width="100%" />
            </Link>
            <div className="d-flex col-12 justify-content-between my-1">
                <Link href="/" className="col-4 pe-1">
                    <img role="button" src={Banner.Pharmacy.src} alt="Check your internet connection" width="100%" />
                </Link>
                <Link href="/" className="col-4 pe-1">
                    <img role="button" src={Banner.PetCare.src} alt="Check your internet connection" width="100%" />
                </Link>
                <Link href="/" className="col-4 pe-1">
                    <img role="button" src={Banner.Diaper.src} alt="Check your internet connection" width="100%" />
                </Link>
            </div>
        </div>
    )
}