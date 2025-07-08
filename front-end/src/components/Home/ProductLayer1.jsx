"use client"

import {
    PaanCorner,
    DairyBread,
    FruitsVegetables,
    ColdDrinksJuices,
    SnackMunchies,
    BreakfastInstantFood,
    SweetTooth,
    PharmaWellness,
    PetCare,
    BabyCare
} from "@/assets/CategoryImages"
import "@/styles/productLayer1.css"
import { lexend } from "@/fonts"
import { useRouter } from "next/navigation"

export default function ProductLayer1() {

    const router = useRouter();

    return (
        <>
            <div className={`${lexend.className} d-flex justify-content-center px-lg-4 px-2`}>
                <div className="row col-12" id="productList">
                    <div type="button" onClick={() => { router.push(`Product/PaanCorner`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={PaanCorner.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Paan Corner</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/DairyBread&Eggs`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={DairyBread.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Dairy, Bread</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/Fruits&Vegetables`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={FruitsVegetables.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Fruits & Vegetables</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/ColdDrinks&Juices`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={ColdDrinksJuices.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Cold Drinks</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/Snacks&Munchies`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={SnackMunchies.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Snacks & Munchies</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/Breakfast&InstantFood`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={BreakfastInstantFood.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Breakfast & InstantFood</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/SweetTooth`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={SweetTooth.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Sweet Tooth</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/Pharma&Wellness`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={PharmaWellness.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Pharma & Wellness</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/PetCare`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={PetCare.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Pet Care</h6>
                    </div>
                    <div type="button" onClick={() => { router.push(`Product/BabyCare`) }}
                        className="col-lg-1 col-2 d-flex flex-column justify-content-center align-items-center p-0">
                        <img src={BabyCare.src} alt="Check your internet connection"
                            className="col-12" />
                        <h6 className="text-primary-emphasis text-center fw-semibold mt-2">Baby Care</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
