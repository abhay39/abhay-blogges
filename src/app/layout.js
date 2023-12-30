import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import StoreProvider from "@/StoreProvider";
import ThemeProviders from "@/component/themeToogle/ThemeProviders";

const inter = Poppins({ subsets: ["latin"],weight:['400','500','600'] });

export const metadata = {
  title: "Blog Application",
  description: "This is a blog app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProviders>
            <div className="mainContainer">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProviders>
        </StoreProvider>
      </body>
    </html>
  );
}
