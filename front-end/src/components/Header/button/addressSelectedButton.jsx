
export default function AddressSelectorButton({ back, selected = false, ind, currentFn }) {
    return (
        <>
            {
                (selected)
                    ?
                    <button className="btn btn-outline-success fw-semibold disabled">
                        Selected
                        <i className="bi bi-check-lg" />
                    </button>
                    :
                    <button className="btn btn-success fw-semibold"
                        onClick={() => currentFn(ind)}>Select</button>
            }
        </>
    )
}
