import Link from "next/link";
import styles from "./index.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.mobile}>
        <Link href={"/"} passHref>
          <a>
            <h3 className={styles.unrugged}>UNRUGGED</h3>
          </a>
        </Link>
      </div>
      <div className={styles.mobileMain}>
        <Link href={"/"} passHref>
          <a>
            <h3 className={styles.unrugged}>UNRUGGED</h3>
          </a>
        </Link>
        <Link href={"/scanner"} passHref>
          <a className={styles.launch}>Launch app</a>
        </Link>
      </div>
      <div className={styles.center}>
        <Link href={"/about"} passHref>
          <a className={styles.link}>ABOUT US</a>
        </Link>
        <Link href={"/mission"} passHref>
          <a className={styles.link}>OUR MISSION</a>
        </Link>
        <Link href={"/claim"} passHref>
          <a className={styles.link}>CLAIM DAO</a>
        </Link>
      </div>
      <div className={styles.mobile}>
        <Link href={"/scanner"} passHref>
          <a className={styles.launch}>Launch app</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
