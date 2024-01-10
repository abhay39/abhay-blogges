import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import StoreProvider from "@/StoreProvider";
import ThemeProviders from "@/component/themeToogle/ThemeProviders";
import AuthProviders from "@/providers/AuthProviders";
import { Toaster } from "react-hot-toast";

const inter = Poppins({ subsets: ["latin"],weight:['400','500','600'] });

export const metadata = {
  title: "Blog Application",
  description: "This is a blog app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProviders>
          <StoreProvider>
            <ThemeProviders>
              <div className="mainContainer">
              <Toaster position="top-center " />
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProviders>
          </StoreProvider>
          </AuthProviders>
      </body>
    </html>
  );
}
