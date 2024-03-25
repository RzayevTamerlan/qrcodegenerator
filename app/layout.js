import { Montserrat } from "next/font/google";
import Header from "@partials/Header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes for free",
  keywords: "QR code, generator, free, tool, free tool, QR code generator, qr logos, QR logos",
  author: "Tamerlan Rzayev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
