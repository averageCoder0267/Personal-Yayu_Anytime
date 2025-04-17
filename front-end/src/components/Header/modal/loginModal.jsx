
export default function LoginModal({ back }) {
    return (
        <section style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", zIndex: 100 }}
            className={`position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <div className="bg-light col-lg-6 col-sm-9 col-11 rounded-5 d-flex flex-column align-items-center px-3 py-3">
                <div className="col-12 px-2" onClick={back}>
                    <i className="bi bi-arrow-left fs-4"
                        role="button"></i>
                </div>
                <div role="button" className="bg-warning col-lg-5 col-sm-6 col-7 rounded d-flex justify-content-center align-items-center p-3">
                    <h3 className="text-dark fw-bold m-0">Yayu</h3>
                    <h3 className="text-success fw-bold m-0">Anytime</h3>
                </div>
                <div className="col-12 mt-3">
                    <h2 className="text-center fw-bold">India's last minute app</h2>
                </div>
                <div className="col-12 m-0">
                    <p className="text-center">Log in or Sign up</p>
                </div>
                <form className="col-12" onSubmit={(e) => { e.preventDefault() }}>
                    <div className="col-12 d-flex justify-content-center align-items-center m-0">
                        <input required className="border-1 rounded col-sm-8 col-12 px-3 py-2" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center m-0">
                        <input required className="border-1 rounded col-sm-8 col-12 mt-sm-3 mt-2 px-3 py-2"
                            type="number" placeholder="Enter verification code"
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                        <button className="btn btn-success col-lg-4 col-sm-6 col-8" type="submit">Continue</button>
                    </div>
                </form>
                <div style={{ fontSize: "11px" }} className="col-12 d-flex justify-content-center align-items-center mt-3">
                    <p className="text-center col-12">
                        By continuing, you agree to our
                        <u role="button">Terms of service</u> & <u role="button">Privacy policy</u>
                    </p>
                </div>
            </div>
        </section>
    )
}