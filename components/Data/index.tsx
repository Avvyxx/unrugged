import styles from "./index.module.scss";

const Data = () => {
  // prettier-ignore
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.datum}>
          <p className={styles.legend}>Scanned Tokens</p>
          <p className={styles.number}>41234</p>
        </div>
        <div className={styles.datum}>
          <p className={styles.legend}>Legit Tokens</p>
          <p className={styles.number}>7156</p>
        </div>
        <div className={styles.datum}>
          <p className={styles.legend}>Scam Tokens</p>
          <p className={styles.number}>8489</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
