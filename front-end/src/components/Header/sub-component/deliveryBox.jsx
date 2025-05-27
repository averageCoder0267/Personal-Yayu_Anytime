"use client"
import { usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react";
import AddressModal from "../modal/addressModal";
import { AddressContext } from "@/contexts/AddressContext";
import { useDisclosure } from "@mantine/hooks";
import { lexend, roboto } from "@/fonts";

export default function DeliveryBox() {

    const { address, addressDispatch } = useContext(AddressContext);

    const { locations, selected } = address;

    const pathname = usePathname();

    const currentAddress = selected;
    const [opened, { open, close }] = useDisclosure(false);

    function setSelected(index) {
        addressDispatch({
            type: "USER_ADDRESS_SELECTOR",
            payload: index
        })
    }

    return (
        <>
            <div id="deliveryBox" onClick={open}
                className={`col-lg-3 ${(pathname == "/") ? "col-sm-10 col-10" : "col-sm-8 col-8"} px-4 py-2`}>
                <h5 className={`${lexend.className} fw-semibold m-0`}>Delivery in 10 minutes</h5>
                <p className={`${roboto.className} text-truncate m-0`}>
                    {
                        (locations?.length == 0) ? "Add Location"
                            : `${locations[currentAddress].houseNo},
                             ${locations[currentAddress].floor},
                             ${locations[currentAddress].area}`
                    }
                </p>
            </div>
            <AddressModal opened={opened} close={close} current={currentAddress} currentFn={setSelected} />
        </>
    )
}
