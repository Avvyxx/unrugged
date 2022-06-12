import clsx from "clsx";
import Navigation from "../Navigation";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.victim}>
        <span className={styles.emphasis}>RUG</span> <b>VICTIM?</b>
        <br />
        <span className={clsx(styles.emphasis, styles.bold)}>CLAIM</span> YOUR
        <br />
        <b>UNRUGGED DAO</b>
      </h2>
      <div className={styles.buttons}>
        <button className={styles.button} type={"button"}>
          CLAIM YOURS
        </button>
        <a className={styles.discord}>Join our Discord</a>
      </div>
      <Navigation />
      <p className={styles.credit}>CREATED BY MIRANO</p>
    </footer>
  );
};

export default Footer;
