import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NextAuthProvider } from "@/modules/NextAuth/provider";
import DefaultMetadata from "@/modules/Metadata/default";


const inter = Inter({ subsets: ["latin"] });

export const metadata = new DefaultMetadata().value();

export default function RootLayout({ children }) {
    return (
        <NextAuthProvider>
            <html lang="en">
                <head>
                    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                    <Script async src="https://analytics.on-cloud.eu.org/script.js" data-website-id="38ab723f-5b8c-42d8-82c2-7bd19cfdca46" />
                </head>
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </NextAuthProvider>
    );
}
