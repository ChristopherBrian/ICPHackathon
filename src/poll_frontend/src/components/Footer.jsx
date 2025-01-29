import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
        <p>&copy; 2025 Slido Clone. All rights reserved.</p>
        {/* <nav>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy</a>
        </nav> */}
        </footer>
    );
}

export default Footer;