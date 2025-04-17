"use client"
import { Input } from "@mantine/core"
import { useState } from "react";

export default function SearchLg() {

    const [value, setValue] = useState('');

    return (
        <div id="searchBox" className="border col-lg-4 d-lg-flex d-none justify-content-center align-items-center">
            {/* <input className="border-1 rounded-2 col-lg-10 fs-5 px-3 py-2" type="text" placeholder="Search Products" /> */}
            <Input
                placeholder="Search Products"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
                rightSectionPointerEvents="auto"
                size="md"
                radius={"lg"}
                className="col-10"
            />
        </div>
    )
}
