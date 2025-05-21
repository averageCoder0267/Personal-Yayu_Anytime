import { useCounter } from "@mantine/hooks"

export default function CartCounter({ current, max_limit }) {

    const [count, handler] = useCounter(current, { min: 0, max: max_limit });

    function Increment() {
        handler.increment();
    }

    function Decrement() {
        handler.decrement();
    }

    return (
        <button className="btn btn-success col-12 d-flex justify-content-around">
            <span className='px-2'
                onClick={Decrement}
            >-</span>
            <span>{count}</span>
            <span className='px-2'
                onClick={Increment}
            >+</span>
        </button>
    )
}