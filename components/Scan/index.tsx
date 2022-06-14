import clsx from "clsx";
import Address from "../Address";
import styles from "./index.module.scss";

const Scan = () => {
  // prettier-ignore
  return (
    <>
      {/* prettier-ignore */}
      <h1 className={styles.header}>
        <em><b className={styles.notItalicized}>TOKEN</b> SCANNER</em>
      </h1>
      <div className={styles.hold}>
        {/* prettier-ignore */}
        <p className={styles.purpose}>
          <b className={styles.starter}>UnruggedDAO&apos;s purpose is simple:</b> to 
          help victims to some of the biggest cryptocurrency rug-pulls to get
          some of their hard earned cash back. We aim to become pioneers un rug
          detection and prevention on Ethereum and compatible networks.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.connect}>
          <p className={styles.top}>
            Connect your wallet to proceed scanning your token.
          </p>
          <p className={styles.bottom}>Connect now</p>
        </div>
        <Address />
        <p className={clsx(styles.bottom, styles.res)}>Connect now</p>
      </div>
    </>
  );
};

export default Scan;
