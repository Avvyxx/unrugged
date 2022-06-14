import type { NextPage } from "next";
import Analysis from "../components/Analysis";
import Main from "../components/pageLayouts/Main";

const Result: NextPage = () => {
  return (
    <Main>
      <Analysis />
    </Main>
  );
};

export default Result;
