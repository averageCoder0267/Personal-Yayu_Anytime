"use client"
import { Input } from "@mantine/core"
import { useState } from "react";

export default function SearchSm() {

    const [value, setValue] = useState('');

    return (
        <>
            <Input
                placeholder="Search Products"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
                rightSectionPointerEvents="auto"
                size="md"
                radius={"lg"}
                className="col-12"
            />
        </>

    )
}