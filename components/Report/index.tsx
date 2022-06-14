import clsx from "clsx";
import styles from "./index.module.scss";

const Report = () => {
  // prettier-ignore
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.foo}>
          <p className={styles.text}>Buying 0.1 ETH:</p>
          <div className={styles.svg}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7C1.75 9.8995 4.1005 12.25 7 12.25Z"
                stroke="#31C324"
                strokeWidth="0.86669"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 6.99967L6.41667 8.16634L8.75 5.83301"
                stroke="#31C324"
                strokeWidth="0.86669"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={styles.data}>SUCCESSFUL</p>
          </div>
        </div>
        <div className={styles.succ}>
          <p className={styles.text}>
            Buy Tax: <span className={clsx(styles.data, styles.green /* styles.yellow | styles.red */)}>0.0%</span>
          </p>
          <p className={styles.text}>
            Sell Tax: <span className={clsx(styles.data, styles.green)}>0.0%</span>
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.bought}>
          Token was able to get bought and sold without any issues.
        </p>
      </div>
    </div>
  );
};

export default Report;
