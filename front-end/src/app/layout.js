import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header/header";
import AuthProvider from "@/contexts/AuthContext";
import AddressProvider from "@/contexts/AddressContext";
import CartProvider from "@/contexts/CartContext";
import CartBar from "@/components/Cart/CartBar";

export const metadata = {
  title: "Yayu Anytime",
  description: "Blinkit Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ paddingBottom: "75px", userSelect: "none" }} className="pb-lg-0">
        <AuthProvider>
          <AddressProvider>
            <CartProvider>
              <MantineProvider>
                <Header />
                {children}
                <CartBar />
              </MantineProvider>
            </CartProvider>
          </AddressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
