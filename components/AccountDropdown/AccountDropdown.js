import Image from "next/image";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./AccountDropdown.module.css";


export default function AccountDropdown({ navbarHeight }) {
    const { data: session } = useSession();

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div
            className={styles.dropdown}
            style={{ "--navbarHeight": `${navbarHeight}px` }}

            onBlur={() => setShowDropdown(false)}
        >
            <div
                tabIndex="0"
                className={styles.account}

                onKeyDown={(event) => {
                    if (event.key === " ") session ? setShowDropdown(!showDropdown) : signIn();
                }}
                onClick={() => session ? setShowDropdown(!showDropdown) : signIn()}
            >
                {
                    session ? (
                        <>
                            <Image className={styles.avatar} src={session.user.image} alt="User avatar" width={50} height={50} />
                            <p className={styles.userNameText}>{session.user.name + ""}</p>
                        </>
                    ) : (
                        <p className={styles.signInText}>Sign In</p>
                    )
                }
            </div>
            <div
                tabIndex={session ? "0" : ""}
                className={styles.dropdownOption}
                style={{
                    height: showDropdown ? "var(--dropdownHeight)" : "0"
                }}

                onFocus={() => session ? setShowDropdown(true) : null}
                onKeyDown={(event) => {
                    if (event.key === "Enter") "Navigate to panel";
                }}
                onClick={() => "Navigate to panel"}
            >
                Web Panel
            </div>
            <div
                tabIndex={session ? "0" : ""}
                className={styles.dropdownOption}
                style={{
                    height: showDropdown ? "var(--dropdownHeight)" : "0"
                }}

                onFocus={() => session ? setShowDropdown(true) : null}
                onKeyDown={(event) => {
                    if (event.key === "Enter") signOut();
                }}
                onClick={() => signOut()}
            >
                Sign Out
            </div>
        </div>
    );
}