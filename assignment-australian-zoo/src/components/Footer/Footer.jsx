import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.container_inner}>
                <div className={styles.title}>Quick Links</div>
                <a href="/">Home</a>
                <a href="/mammals">Mammals</a>
                <a href="/reptiles">Reptiles</a>
                <a href="/birds">Birds</a>
            </div>
            <div className={styles.container_inner}>
                <div className={styles.title}>Contact Info</div>
                <h4>Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571</h4>
                <h4>+62 361 154874</h4>
                <h4>contact@domain.com</h4>
            </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.container}>
            <div className={styles.logo}>Australian <span>Zoo</span></div>
            <div className={styles.copyright}>Copyright © 2025. All rights reserved.</div>
        </div>
    </footer>
}

export default Footer;