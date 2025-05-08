"use client"
import { roboto } from "@/fonts";
import { Input } from "@mantine/core";
import { useState } from "react";

export default function SearchBoxLg() {

    const [value, setValue] = useState("");

    return (
        <div id="searchBox"
            className="border col-lg-4 d-lg-flex d-none justify-content-center align-items-center">
            <Input
                placeholder="Search Products"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
                rightSectionPointerEvents="auto"
                size="md"
                radius="lg"
                className={`${roboto.className} col-10`}
            />
        </div>
    )
}
