import { Caladea, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import StoreProvider from "@/StoreProvider";
import ThemeProviders from "@/component/themeToogle/ThemeProviders";
import AuthProviders from "@/providers/AuthProviders";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Poppins({ weight: ['400', '500', '600'], subsets: ['latin-ext'] });

export const metadata = {
  title: "YOURVIEW",
  description: "This is a blog app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2244249864037808" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2244249864037808"
          crossorigin="anonymous"
        ></script>
        {/* Add other meta tags, links, etc., as needed */}
      </Head>

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
    </>
  );
}
