import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Asha Power Tech - Power Solutions",
  description: "Reliable power generation and lighting solutions for industrial and commercial applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} antialiased text-neutral-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
