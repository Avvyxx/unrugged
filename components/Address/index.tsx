import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Address = () => {
  const [token, setToken] = useState("");

  const { route } = useRouter();

  useEffect(() => {
    const temp = sessionStorage.getItem("unruggedToken");
    if (temp) {
      setToken(temp);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("unruggedToken", token);
  }, [token]);

  // prettier-ignore
  return (
    <div className={clsx(styles.container, route === '/scanner' && styles.diff)}>
      {route === "/" ? (
        <p className={styles.top}>
          Scan your Token Address to verify a crypto token.
        </p>
      ) : (
        <div className={styles.connect}>
          <p className={styles.top}>
            Connect your wallet to proceed scanning your token.
          </p>
          <p className={styles.now}>Connect now</p>
        </div>
      )}
      <div className={styles.inputCon}>
        <input
          className={styles.input}
          type={"text"}
          placeholder={"Token Address"}
          value={token}
          onChange={(event) => {
            setToken(event.target.value);
          }}
        />
        <Link 
          href={"/scanner"} 
          passHref
        >
          <a className={styles.button}>Token Scanner</a>
        </Link>
      </div>
      {route === "/" ? (
        <p className={styles.bottom}>Claim your UnruggedDAO</p>
      ) : (
        <p className={clsx(styles.now, styles.show)}>Connect now</p>
      )}
    </div>
  );
};

export default Address;
