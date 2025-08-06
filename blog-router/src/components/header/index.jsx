import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Main page
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Articles
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
