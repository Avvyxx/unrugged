import Address from "../Address";
import styles from "./index.module.scss";

const Scan = () => {
  // prettier-ignore
  return (
    <>
      <h1 className={styles.header}>
        <em><b className={styles.notItalicized}>TOKEN</b> SCANNER</em>
      </h1>
      <div className={styles.hold}>
        <p className={styles.purpose}>
          <b className={styles.starter}>UnruggedDAO&apos;s purpose is simple:</b> to 
          help victims to some of the biggest cryptocurrency rug-pulls to get
          some of their hard earned cash back. We aim to become pioneers un rug
          detection and prevention on Ethereum and compatible networks.
        </p>
      </div>
      <Address />
    </>
  );
};

export default Scan;
