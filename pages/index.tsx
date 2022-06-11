import type { NextPage } from "next";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head title={"Unrugged"} />
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
