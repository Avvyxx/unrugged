import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const Navigation = () => {
  const { route } = useRouter();

  // prettier-ignore
  return (
    <nav className={styles.container}>
      <div className={styles.mobile}>
        <Link 
          href={"/"} 
          passHref
        >
          <a>
            <h3 className={styles.unrugged}>UNRUGGED</h3>
          </a>
        </Link>
      </div>
      <div className={styles.mobileMain}>
        <Link 
          href={"/"} 
          passHref
        >
          <a>
            <h3 className={styles.unrugged}>UNRUGGED</h3>
          </a>
        </Link>
        <Link 
          href={"/scanner"} 
          passHref
        >
          <a className={styles.launch}>Launch app</a>
        </Link>
      </div>
      { route === '/' && 
      <div className={styles.center}>
        <a 
          className={styles.link} 
          href="#about"
        >
          ABOUT US
        </a>
        <a 
          className={styles.link} 
          href="#mission"
        >
          OUR MISSION
        </a>
        <Link 
          href={"/claim"} 
          passHref
        >
          <a className={styles.link}>CLAIM DAO</a>
        </Link>
      </div> }
      <div className={styles.mobile}>
        <Link 
          href={"/scanner"} 
          passHref
        >
          <a className={styles.launch}>Launch app</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
