import clsx from "clsx";
import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import Footer from "../../Footer";
import Head from "../../Head";
import Navigation from "../../Navigation";
import styles from "./index.module.scss";

const Main: FC = ({ children }) => {
  const [prevent, setPrevent] = useState(true);
  const { route } = useRouter();

  const main = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (main.current) {
      const { scrollTop, scrollHeight, clientHeight } = main.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPrevent(false);
      }
    }
  };

  return (
    <>
      <Head title={"Unrugged"} />
      <div className={clsx(styles.container, prevent && styles.prevent)}>
        <Navigation />
        {/* prettier-ignore */}
        <main 
          className={styles.main} 
          ref={main} 
          onScroll={onScroll}
        >
          <div className={clsx(styles.dot, styles.first)}></div>
          <div className={clsx(styles.dot, styles.second)}></div>
          <div className={clsx(styles.dot, styles.third)}></div>
          <div className={clsx(styles.dot, styles.fourth)}></div>
          {route === "/" && (
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
