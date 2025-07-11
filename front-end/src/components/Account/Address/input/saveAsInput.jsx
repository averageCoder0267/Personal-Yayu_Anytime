"use client"
import { AddressContext } from "@/contexts/AddressContext";
import { SegmentedControl, TextInput } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";

export default function SaveAsInput({ current, saveAsFn }) {

    const { address } = useContext(AddressContext);
    const { locations } = address;
    const textRef = useRef();
    useEffect(() => {
        if (current == -1) {
            textRef.current.style.display = "none";
        } else {
            if ((locations[current].saveAs == "Home") ||
                (locations[current].saveAs == "Work") || (locations[current].saveAs == "Hotel"))
                textRef.current.style.display = "none";
            else
                textRef.current.style.display = "block";
        }
    }, []);

    return (
        <div className="d-flex flex-lg-row flex-column align-items-start justify-content-start">
            <SegmentedControl
                withItemsBorders={false}
                color="#198754"
                data={['Home', 'Work', 'Hotel', `Other`]}
                size="md"
                className="me-3"
                defaultValue={
                    (current == -1) ? "Home" :
                        ((locations[current].saveAs == "Home") ||
                            (locations[current].saveAs == "Work") ||
                            (locations[current].saveAs == "Hotel")) ? locations[current].saveAs : "Other"
                }
                onClick={(event) => {
                    saveAsFn((prev) => {
                        return { ...prev, saveAs: event.target.value };
                    })
                    if (event.target.value == "Other")
                        textRef.current.style.display = "block";
                    else
                        textRef.current.style.display = "none";
                }}
            />
            <TextInput
                ref={textRef}
                placeholder="Save address as"
                mt="xs"
                size='md'
                className="mt-lg-auto mt-2"
                defaultValue={
                    (current == -1) ? "" :
                        ((locations[current].saveAs == "Home") ||
                            (locations[current].saveAs == "Work") ||
                            (locations[current].saveAs == "Hotel")) ? "" : locations[current].saveAs
                }
                onBlur={(event) => {
                    saveAsFn((prev) => {
                        return { ...prev, saveAs: event.target.value };
                    });
                }}
            />
        </div>
    )
}