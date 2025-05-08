"use client"
import { Drawer, TextInput } from '@mantine/core';
import { IMaskInput } from "react-imask";
import SaveAsInput from '../input/saveAsInput';
import { useContext, useEffect, useState } from 'react';
import { AddressContext } from '@/contexts/AddressContext';
import AddUserAddress from '@/hooks/AddUserAddress';
import { AuthContext } from '@/contexts/AuthContext';
import UpdateUserAddress from '@/hooks/UpdateuserAddress';
import { lexend } from '@/fonts';

export default function AddressDrawer({ opened, close, current }) {

    const { auth } = useContext(AuthContext);
    const { address, addressDispatch } = useContext(AddressContext);

    const [myAddress, setMyAddress] = useState({
        saveAs: "",
        houseNo: "",
        floor: "",
        area: "",
        landmark: "",
        name: "",
        phoneNo: ""
    });

    async function submitForm() {
        if (current == -1) {
            if (myAddress.houseNo == "" || myAddress.area == "" || myAddress.name == "" || myAddress.phoneNo == "")
                return;
            const form = {
                userId: auth.userId, saveAs: (myAddress.saveAs == "") ? "Home" : myAddress.saveAs,
                houseNo: myAddress.houseNo, floor: myAddress.floor, area: myAddress.area, landmark: myAddress.landmark,
                name: myAddress.name, phoneNo: myAddress.phoneNo
            };
            const newAddress = await AddUserAddress(form);
            addressDispatch({
                type: "USER_ADDRESS",
                payload: newAddress
            });
            close();
        } else {
            const addressId = address[current]._id;
            let isChanged = false;
            for (let key in myAddress) {
                if (myAddress[key] != "") {
                    isChanged = true;
                    break;
                }
            };
            if (isChanged) {
                const form = {
                    saveAs: (myAddress.saveAs == "") ? address[current].saveAs : myAddress.saveAs,
                    houseNo: (myAddress.houseNo == "") ? address[current].houseNo : myAddress.houseNo,
                    floor: (myAddress.floor == "") ? address[current].floor : myAddress.floor,
                    area: (myAddress.area == "") ? address[current].area : myAddress.area,
                    landmark: (myAddress.landmark == "") ? address[current].landmark : myAddress.landmark,
                    name: (myAddress.name == "") ? address[current].name : myAddress.name,
                    phoneNo: (myAddress.phoneNo == "") ? address[current].phoneNo : myAddress.phoneNo
                };
                UpdateUserAddress(addressId, form);
                const newAddress = [...address];
                newAddress[current] = { ...form, userId: auth.userId, _id: addressId };
                addressDispatch({
                    type: "USER_ADDRESS",
                    payload: newAddress
                });
            } else {
                console.log("no change");
            }
            close();
        }
    }

    return (
        <>
            <Drawer position='bottom' className={lexend.className}
                radius="md" opened={opened} size="43rem" onClose={close} title="Enter your address">
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <p className='text-secondary fw-semibold m-0'>Save address as</p>
                    <SaveAsInput saveAsFn={setMyAddress} current={current} />
                    <TextInput
                        required
                        placeholder="Flat / House no / Building name"
                        mt="xs"
                        size='lg'
                        defaultValue={
                            (current == -1) ? "" : address[current].houseNo
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, houseNo: event.target.value };
                            })
                        }}
                    />
                    <TextInput
                        placeholder="Floor (Optional)"
                        mt="xs"
                        size='lg'
                        defaultValue={
                            (current == -1) ? "" : address[current].floor
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, floor: event.target.value };
                            })
                        }}
                    />
                    <TextInput
                        required
                        placeholder="Area / Sector / Locality"
                        mt="xs"
                        size='lg'
                        defaultValue={
                            (current == -1) ? "" : address[current].area
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, area: event.target.value };
                            })
                        }}
                    />
                    <TextInput
                        placeholder="Nearby Landmark (Optional)"
                        mt="xs"
                        size='lg'
                        defaultValue={
                            (current == -1) ? "" : address[current].landmark
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, landmark: event.target.value };
                            })
                        }}
                    />
                    <p className="text-secondary fw-semibold m-0 mt-3">Enter your details for seamless delivery experience</p>
                    <TextInput
                        required
                        placeholder="Your name"
                        mt="xs"
                        size='lg'
                        defaultValue={
                            (current == -1) ? "" : address[current].name
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, name: event.target.value };
                            })
                        }}
                    />
                    <TextInput
                        required
                        placeholder="Your phone number"
                        mt="xs"
                        size='lg'
                        component={IMaskInput}
                        mask="+91 00000 00000"
                        defaultValue={
                            (current == -1) ? "+91" : address[current].phoneNo
                        }
                        onBlur={(event) => {
                            setMyAddress((prev) => {
                                return { ...prev, phoneNo: event.target.value };
                            })
                        }}
                    />
                    <button type='submit' onClick={submitForm}
                        className='btn btn-success btn-lg w-100 fw-semibold mt-2'>Save Address</button>
                </form>
            </Drawer>

        </>
    );
}