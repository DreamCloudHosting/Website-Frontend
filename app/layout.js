import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dream Cloud Hosting",
    description: "Customize your needs for hosting",
    generator: "Next.js",
    applicationName: "Dream Cloud",
    referrer: "origin-when-cross-origin",
    keywords: ["Hosting", "Web", "Server", "Minecraft", "Minecraft Server", "Discord", "Discord Bot"],
    authors: [
        { name: "qtrainnotgood" },
        { name: "OnCloud", url: "https://github.com/OnCloud125252" }
    ],
    colorScheme: "dark",
    creator: "OnCloud",

    openGraph: {
        title: "Dream Cloud Hosting",
        description: "Customize your needs for hosting",
        url: "https://dreamcloudhosting.netlify.app",
        siteName: "Dream Cloud Hosting",
        images: [
            {
                url: "https://i.ibb.co/QvR9Z8p/banner-blue.jpg",
                width: 800,
                height: 600,
                alt: "Banner",
            },
            {
                url: "https://i.ibb.co/QvR9Z8p/banner-blue.jpg",
                width: 2134,
                height: 2134,
                alt: "Banner",
            },
        ],
        locale: "zh_TW",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Dream Cloud Hosting</title>
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
