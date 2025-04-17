import "@/styles/header.css";
import BackButton from "./sub-component/backButton";
import DeliveryBox from "./sub-component/deliveryBox";
import HeaderLogo from "./sub-component/headerLogo";
import SearchLg from "./sub-component/searchLg";
import AccountBox from "./sub-component/accountBox";
import CartBox from "./sub-component/cartBox";
import SearchSm from "./sub-component/searchSm";

export default function Header() {
    return (
        <header>
            <div id="headerFirst" className="d-flex col-12">
                <HeaderLogo />
                <BackButton />
                <DeliveryBox />
                <SearchLg />
                <AccountBox />
                <CartBox />
            </div>
            <div id="headerSecond" className="d-lg-none d-flex p-1">
                <SearchSm />
            </div>
        </header>
    )
};