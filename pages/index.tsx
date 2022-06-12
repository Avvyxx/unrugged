import type { NextPage } from "next";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Main from "../components/pageLayouts/Main";

const Home: NextPage = () => {
  return (
    <Main>
      <Landing />
    </Main>
  );
};

export default Home;
