"use client"

import AddressIcon from "@/assets/AddressIcon";
import { AddressContext } from "@/contexts/AddressContext"
import { Menu, MenuItem } from "@mantine/core";
import { useContext } from "react"
import MenuInput from "./input/menuInput";
import DeleteUserAddress from "@/hooks/DeleteUserAddress";

export default function AddressList({ currentFn, openDrawer }) {

    const { address } = useContext(AddressContext);

    return (
        <div className="mt-4">
            {
                (address.length == 0) ? ""
                    : address?.map((ele, i) => {
                        return (
                            <div className="d-flex mt-2" key={i}>
                                <div className="col-1 me-4">
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
                                <div className="col-10">
                                    <h6 className="m-0">{ele.saveAs}</h6>
                                    <p className="text-secondary fw-semibold">
                                        {`${ele.houseNo}, ${ele.floor}, ${ele.area}, Near ${ele.landmark}`}
                                    </p>
                                </div>
                                <div>
                                    <MenuInput current={i} currentFn={currentFn} openDrawer={openDrawer}
                                        deleteAddressFn={DeleteUserAddress} />
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}