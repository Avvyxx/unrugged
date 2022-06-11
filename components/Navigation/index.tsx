import Link from "next/link";
import styles from "./index.module.scss";

// prettier-ignore
const Navigation = () => {
  return (
    <nav className={styles.container}>
      <h3 className={styles.unrugged}>UNRUGGED</h3>
      <div className={styles.center}>
        <Link 
          href={"/about"}
          passHref
        >
          <a className={styles.link}>ABOUT US</a>
        </Link>
        <Link 
          href={"/mission"} 
          passHref
        >
          <a className={styles.link}>OUR MISSION</a>
        </Link>
        <Link 
          href={"/claim"} 
          passHref
        >
          <a className={styles.link}>CLAIM DAO</a>
        </Link>
      </div>
      <p className={styles.launch}>Launch app</p>
    </nav>
  );
};

export default Navigation;
