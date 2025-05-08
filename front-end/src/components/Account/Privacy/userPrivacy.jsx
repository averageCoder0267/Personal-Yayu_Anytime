"use client"

import { useState } from "react";

export default function UserPrivacy() {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleReadButton() {
        setIsExpanded((prev) => {
            if (prev)
                return false;
            else
                return true;
        });
    };

    return (
        <div className="p-4">
            <h4 className="fw-semibold">Account privacy and policy</h4>
            <p className="text-secondary fw-lighter">
                {
                    (isExpanded)
                        ? `We i.e. "Yayu Anytime", are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount. This privacy policy explains how we collect, use, process and disclose information about you. By using our website/ app/ platform and affiliated services, you consent to the terms of our privacy policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read this privacy policy to understand the collection, use, and disclosure of your information from time to time, to keep yourself updated with the changes and updates that we make to this policy. In such situations, we recommend that you read the privacy policy on the applicable site.`
                        : `We i.e. "Yayu Anytime", are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.`
                }
            </p>
            <button className="btn btn-outline-success" onClick={handleReadButton}>
                Read More
                <i className={
                    (isExpanded)
                    ? "bi bi-caret-up-fill ms-2"
                    : "bi bi-caret-down-fill ms-2"
                 } />
            </button>
            <div type="button">
                <div className="border d-flex my-4 p-1">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i className="bi bi-trash3 fs-3" />
                    </div>
                    <div className="col-10 d-flex flex-column justify-content-center align-items-start px-2">
                        <p className="fw-semibold m-0">Request to delete account</p>
                        <p className="text-secondary m-0">Request to closure of your account</p>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i className="bi bi-caret-right-fill fs-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}