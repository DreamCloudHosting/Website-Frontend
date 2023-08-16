import Link from "next/link";

import styles from "./Card.module.css";


export default function ProductCard({ title, description, image, readMore }) {
    return (
        <Link href={readMore || "#"} className={styles.card}>
            {image ? (
                <div className={styles.background} style={{ backgroundImage: `url(${image})` }}></div>
            ) : (<></>)}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
}