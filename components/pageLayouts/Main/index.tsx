import clsx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";
import Footer from "../../Footer";
import Head from "../../Head";
import Navigation from "../../Navigation";
import styles from "./index.module.scss";

const Main: FC = ({ children }) => {
  const { route } = useRouter();

  return (
    <>
      <Head title={"Unrugged"} />
      <div className={styles.container}>
        <Navigation />
        <main className={styles.main}>
          <div className={clsx(styles.dot, styles.first)}></div>
          <div className={clsx(styles.dot, styles.second)}></div>
          <div className={clsx(styles.dot, styles.third)}></div>
          <div className={clsx(styles.dot, styles.fourth)}></div>
          {route !== "/scanner" && (
            <>
              <div className={clsx(styles.dot, styles.fifth)}></div>
              <div className={clsx(styles.dot, styles.sixth)}></div>
              <div className={clsx(styles.dot, styles.seventh)}></div>
              <div className={clsx(styles.dot, styles.eighth)}></div>
              <div className={clsx(styles.dot, styles.ninth)}></div>
              <div className={clsx(styles.dot, styles.tenth)}></div>
            </>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
