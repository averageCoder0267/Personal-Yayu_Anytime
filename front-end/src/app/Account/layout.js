import DefaultAccount from "@/components/Account/defaultAccount";

export const metadata = {
    title: "Yayu Anytime | Account",
    description: "Blinkit Clone ",
};

export default function AccountLayout({ children }) {
    return (
        <DefaultAccount content={children} />
    );
}
