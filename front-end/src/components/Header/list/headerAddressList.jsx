
import AddressIcon from "@/assets/AddressIcon"
import { AddressContext } from "@/contexts/AddressContext"
import Link from "next/link";
import { useContext } from "react"
import AddressSelectorButton from "../button/addressSelectedButton";

export default function HeaderAddressList({ back, current, currentFn }) {

    const { address } = useContext(AddressContext);
    const { locations } = address;

    return (
        <div className="">
            <Link href="/Account/Address" className="btn btn-sm btn-outline-success fw-semibold mb-3"
                onClick={back}>
                <i className="bi bi-plus-lg" /> Add new address
            </Link>
            {
                (locations.length == 0) ? ""
                    : locations?.map((ele, i) => {
                        return (
                            <div className="d-flex my-2" key={i}>
                                <div className="col-1 me-sm-4 me-1">
                                    <img src={
                                        (ele.saveAs == "Home")
                                            ? AddressIcon.Home.src
                                            : (ele.saveAs == "Work")
                                                ? AddressIcon.Work.src
                                                : (ele.saveAs == "Hotel")
                                                    ? AddressIcon.Hotel.src
                                                    : AddressIcon.Other.src
                                    }
                                        alt="Reload page" width={"100%"}
                                    />
                                </div>
                                <div className="col-sm-8 col-7 me-sm-4">
                                    <h6 className="m-0">{ele.saveAs}</h6>
                                    <p className="text-secondary fw-semibold">
                                        {`${ele.houseNo}, ${ele.floor}, ${ele.area}, Near ${ele.landmark}`}
                                    </p>
                                </div>
                                {
                                    (i == current) ?
                                        <div className="d-flex align-items-center">
                                            <AddressSelectorButton ind={i} selected={true} />
                                        </div>
                                        :
                                        <div className="d-flex align-items-center">
                                            <AddressSelectorButton ind={i} currentFn={currentFn} back={back} />
                                        </div>
                                }
                            </div>
                        )
                    })
            }
        </div>
    )
}