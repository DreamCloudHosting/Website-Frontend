import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";
import Option from "./components/Option/Option";


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
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
                    title="Price"
                    link="#"
                />
                <Option
                    title="Service"
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
    );
}