import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(NavClicked, SetNavClicked) {
    return <nav className={styles.navbar}>
        <div className={styles.site_logo}>Australian <span className={styles.zoo_sub}>Zoo</span></div>
        <div className={styles.navbar_links}>
            <Link onClick={() => {
                SetNavClicked(true);
            }} to="/" className={styles.navbar_link}>
                <span className={styles.text}>Home</span>
                <span className={styles.icon}><img src="/img/icons/home.png" alt="" /></span>
            </Link>
            <Link onClick={() => {
                SetNavClicked(true);
            }} to="/mammals" className={styles.navbar_link}>
                <span className={styles.text}>Mammals</span>
                <span className={styles.icon}><img src="/img/icons/mammals.png" alt="" /></span>
            </Link>
            <Link onClick={() => {
                SetNavClicked(true);
            }} to="/reptiles" className={styles.navbar_link}>
                <span className={styles.text}>Reptiles</span>
                <span className={styles.icon}><img src="/img/icons/reptiles.png" alt="" /></span>
            </Link>
            <Link onClick={() => {
                SetNavClicked(true);
            }} to="/birds" className={styles.navbar_link}>
                <span className={styles.text}>Birds</span>
                <span className={styles.icon}><img src="/img/icons/birds.png" alt="" /></span>
            </Link>
        </div>
    </nav>
}

export default NavBar;