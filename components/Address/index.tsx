import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Address = () => {
  const [token, setToken] = useState("");

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
    <div className={styles.container}>
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
  );
};

export default Address;
