import type { NextPage } from "next";
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
