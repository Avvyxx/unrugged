import Address from "../Address";
import Data from "../Data";
import Information from "../Information";
import Mission from "../Mission";
import styles from "./index.module.scss";

const Landing = () => {
  // prettier-ignore
  return (
    <>
      <h1 className={styles.goal}>
        <b className={styles.notItalicized}>UNRUGGED</b> IS THE
        <br />
        <b><em>DETECTION</em></b> AND
        <br />
        <b className={styles.notItalicized}>RECOVERY <em>PROTOCOL</em></b>
      </h1>
      <Address />
      <Data />
      <Information />
      <Mission />
    </>
  );
};

export default Landing;
