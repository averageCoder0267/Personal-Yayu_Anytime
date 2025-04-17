import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header/header";
import UserProvider from "@/contexts/UserContext";

export const metadata = {
  title: "Yayu Anytime",
  description: "Blinkit Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <MantineProvider>
            <Header />
            {children}
          </MantineProvider>
        </UserProvider>
      </body>
    </html>
  );
}
