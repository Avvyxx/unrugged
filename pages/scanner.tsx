import type { NextPage } from "next";
import Main from "../components/pageLayouts/Main";
import Scan from "../components/Scan";

const Scanner: NextPage = () => {
  return (
    <Main>
      <Scan />
    </Main>
  );
};

export default Scanner;
