import Link from "next/link";

import styles from "./Option.module.css";


export default function Option({ title, link }) {
    return (
        <li className={styles.container}>
            <Link href={link || "#"} className={styles.option}>
                <p>{title}</p>
                <div className={styles.leftBorder}></div>
                <div className={styles.topBorder}></div>
                <div className={styles.rightBorder}></div>
            </Link>
        </li>
    );
}