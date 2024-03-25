import {Montserrat} from "next/font/google";
import Header from "@partials/Header";
import "./globals.css";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes for free. You can create QR codes with logos and colors. Download the QR code as a PNG image.",
  keywords: "QR code, generator, free, tool, free tool, QR code generator, qr logos, QR logos",
  author: "Tamerlan Rzayev",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <meta property="og:title" content="QR Code Generator"/>
      <meta property="og:description" content="Generate QR codes for free. You can create QR codes with logos and colors. Download the QR code as a PNG image."/>
      <meta property="og:image" content="/assets/qr-code.svg"/>
      <meta property="og:url" content="https://qrcodegenerator-theta.vercel.app/"/>
      <meta property="og:type" content="website"/>
    </head>
    <body className={montserrat.className}>
    <Header/>
    {children}
    </body>
    </html>
  );
}
