import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  NextPage,
} from "next";
import styles from "./index.module.scss";

export async function getStaticProps(ctx: GetStaticPathsContext) {
  return {
    props: {},
  };
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const Template: NextPage = () => {
  return <div className={styles.container}></div>;
};

export default Template;
