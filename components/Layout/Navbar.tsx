import classes from "../../styles/Navbar.module.scss";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__links}>
        <li className={classes.navbar__link}>
          <Link href="/">Daniel's Demo Blog</Link>
        </li>
        <li className={classes.navbar__link}>
          <Link href="/posts">Posts</Link>
        </li>
        <li className={classes.navbar__link}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
