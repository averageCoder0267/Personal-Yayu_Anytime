"use client"

import { useCounter } from '@mantine/hooks';

export default function ProductCounter() {

    const [count, handlers] = useCounter(0, { min: 0, max: 10 });

    return (
        <>
            <button className="btn btn-success col-md-6">
                {
                    (count == 0)
                        ?
                        <span className='col-12 px-3' onClick={handlers.increment}>
                            Add
                        </span>
                        :
                        <>
                            <span className='me-2 px-2' onClick={handlers.decrement}>-</span>
                            <span>{count}</span>
                            <span className='ms-2 px-2' onClick={handlers.increment}>+</span>
                        </>
                }
            </button>
        </>
    )
}