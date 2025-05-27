import { AddressContext } from "@/contexts/AddressContext";
import { lexend } from "@/fonts";
import DeleteUserAddress from "@/hooks/DeleteUserAddress";
import { Menu } from "@mantine/core";
import { useContext } from "react";

export default function MenuInput({ current, currentFn, openDrawer, deleteAddressFn }) {

    const { address, addressDispatch } = useContext(AddressContext);
    const { locations, selected } = address;

    function deleteHandler() {
        const addressId = locations[current]._id;
        deleteAddressFn(addressId);
        const newAddress = locations.filter((ele, i) => {
            if (i != current)
                return ele;
        })
        currentFn(-1);
        addressDispatch({
            type: "USER_ADDRESS_AND_SELECTION",
            payload: { locations: newAddress, selected: newAddress.length - 1 }
        });
    }

    return (
        <Menu position="left">
            <Menu.Target>
                <button className="btn" onClick={() => currentFn(current)}><i className="bi bi-three-dots-vertical" /></button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item children="Edit" onClick={() => openDrawer()} />
                <Menu.Item children="Delete" onClick={() => deleteHandler()} />
            </Menu.Dropdown>
        </Menu>
    )
}