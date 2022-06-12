import { FC } from "react";
import Footer from "../../Footer";
import Head from "../../Head";
import Navigation from "../../Navigation";
import styles from "./index.module.scss";

// prettier-ignore
const Main: FC = ({ children }) => {
  return (
    <>
      <Head title={"Unrugged"} />
      <div className={styles.container}>
        <Navigation />
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Main;
