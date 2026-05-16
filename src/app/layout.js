
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['400','500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "FlavorCraft - Elevate Your Culinary Experience",
  description: "FlavorCraft is your ultimate destination for culinary inspiration, featuring expert recipes, cooking tips, and innovative flavor combinations to elevate your cooking skills and create unforgettable dishes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={poppins.className}>
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
