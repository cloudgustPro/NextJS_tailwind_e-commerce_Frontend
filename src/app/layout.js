import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/Components/HeaderTop";
import Headermain from "@/Components/Headermain";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <Headermain/>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
