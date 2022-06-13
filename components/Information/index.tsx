import styles from "./index.module.scss";

const Information = () => {
  // prettier-ignore
  return (
    <div className={styles.container}>
      <h2 className={styles.question}>
        WHAT <span className={styles.italicized}>IS</span>
        <br />
        <b>UNRUGGED <span className={styles.italicized}>DAO</span>?</b>
      </h2>
      <p className={styles.purpose}>
        <b className={styles.starter}>UnruggedDAO&apos;s purpose is simple:</b> to 
        help victims to some of the biggest cruptocurrency rug-pulls to get
        some of their hard earned cash back. We aim to become pioneers in rug
        detection and prevention on Ethereum and compatible networks.
      </p>
      <div className={styles.whitepaper}>
        <button 
          className={styles.button} 
          type={"button"}
        >
          Read our Whitepaper
        </button>
        <p className={styles.link}>Read our Whitepaper</p>
      </div>
      <div className={styles.blankForNow}></div>
    </div>
  );
};

export default Information;
