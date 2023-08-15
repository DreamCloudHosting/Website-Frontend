"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import Option from "./components/Option/Option";


export default function Navbar() {
    const navbarRef = useRef();
    const [navbarHeight, setNavbarHeight] = useState(100);

    useEffect(() => {
        function handleResize() {
            setNavbarHeight(navbarRef.current.clientHeight);
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav className={styles.navbar} ref={navbarRef}>
                <Link href="/">
                    <Image
                        width={1196}
                        height={480}
                        src="/images/logo.png"
                        alt="logo"
                        className={styles.logoImg}
                    />
                </Link>
                {/* <div class="hamburger-menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div> */}
                <ul className={styles.menu}>
                    <Option
                        title="Home"
                        link="/"
                    />
                    <Option
                        title="Pricing"
                        link="#"
                    />
                    <Option
                        title="Services"
                        link="#"
                    />
                    <Option
                        title="About Us"
                        link="/about"
                    />
                    <Option
                        title="Contact Us"
                        link="#"
                    />
                </ul>
            </nav>
            <div className={styles.topBlock} style={{ height: navbarHeight }} />
        </>
    );
}