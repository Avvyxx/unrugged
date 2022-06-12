import styles from "./index.module.scss";

const Mission = () => {
  // prettier-ignore
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.left}>
          <h2 className={styles.header}>
            OUR
            <br />
            <span className={styles.bold}>MISSION</span>
          </h2>
          <p className={styles.purpose}>
            <b className={styles.starter}>UnruggedDAO&apos;s purpose is simple:</b>{" "}
            to help victims to some of the biggest cryptocurrency rug-pulls to
            get some of their hard earned cash back. We aim to become pioneers
            un rug detection and prevention on Ethereum and compatible networks.
          </p>
          <button 
            className={styles.button} 
            type={"button"}
          >
            Read our Whitepaper
          </button>
        </div>
        <div className={styles.placeholders}>
          <div className={styles.placeholder}></div>
          <div className={styles.placeholder}></div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
