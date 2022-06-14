import clsx from "clsx";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Report from "../Report";
import styles from "./index.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = () => {
  return (
    <>
      {/* prettier-ignore */}
      <div className={styles.top}>
        <h1 className={styles.header}>
          TOKEN <span className={styles.notBold}>ANALYSIS</span>
        </h1>
        <p className={styles.result}>
          Result: <span className={clsx(styles.status,styles.green /*styles.yellow | styles.red*/)}>SAFE TOKEN</span>
        </p>
      </div>
      <div className={styles.analysis}>
        <div className={styles.main}>
          <div className={styles.attributes}>
            <div className={styles.hero}>
              <p className={styles.title}>
                TOKEN <span className={styles.second}>ATTRIBUTES</span>
              </p>
              <p className={styles.address}>
                0XA0V84AS64DA478ASGAG084904AF9874FAS9AS47F78ASF0
              </p>
            </div>
            <div className={styles.content}>
              <p className={styles.attribute}>
                Name: <span className={styles.data}>USD Coin</span>
              </p>
              <p className={styles.attribute}>
                Symbol: <span className={styles.data}>USDC</span>
              </p>
              <p className={styles.attribute}>
                Decimals: <span className={styles.data}>8</span>
              </p>
              <p className={styles.attribute}>
                Supply: <span className={styles.data}>6</span>
              </p>
              {/* prettier-ignore */}
              <p className={styles.attribute}>
              Socials: <span className={styles.data}>Not verified on Exporer</span>
              </p>
              <p className={styles.attribute}>
                CoinGecko Listing: <span className={styles.data}>None</span>
              </p>
              <p className={styles.attribute}>
                CoinMarketCap Listing: <span className={styles.data}>None</span>
              </p>
            </div>
          </div>
          <div className={styles.trading}>
            <p className={styles.title}>
              SIMULATED <span className={styles.italics}>TRADING</span>{" "}
              <span className={styles.normal}>REPORTS</span>
            </p>
            <div className={styles.reports}>
              <Report />
              <Report />
              <Report />
              <Report />
              <Report />
            </div>
          </div>
        </div>
        <div className={styles.token}>
          <div className={styles.main}>
            <div className={styles.half}>
              <p className={styles.title}>TOKEN DEPLOYER ANALYSIS</p>
              {/* prettier-ignore */}
              <div className={styles.con}>
                <p className={styles.attribute}>
                  Deployed: <span className={styles.data}>3 Days, 4 hours ago</span>
                </p>
                <p className={styles.attribute}>
                  Deployment transaction: <span className={styles.data}>0xDEAD...BEEF</span>
                </p>
                <p className={styles.attribute}>
                  Deployer net worth: <span className={styles.data}>$25,138</span>
                </p>
                <p className={styles.attribute}>
                  Deployer wallet age: <span className={styles.data}>3 weeks</span>
                </p>
                <p className={styles.attribute}>
                  Deployer wallet AML analysis: <span className={styles.data}>55.5% Suspicious</span>
                </p>
              </div>
            </div>
            <div className={styles.half}>
              <p className={styles.title}>TOKEN RESOURCE CODE</p>
              {/* prettier-ignore */}
              <div className={styles.con}>
                <p className={styles.attribute}>
                  Code verified on explorer: <span className={styles.data}>True</span>
                </p>
                <p className={styles.attribute}>
                  Source contains suspicious code: <span className={styles.data}>True</span>
                </p>
                <p className={styles.attribute}>
                  Contract is proxy: <span className={styles.data}>False</span>
                </p>
                <p className={styles.attribute}>
                  Non-standard formatting: <span className={styles.data}>True</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.chart}>
              <p className={styles.title}>TOKEN HOLDERS ANALYSIS</p>
              <div className={styles.legend}>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.black)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Top 10 EOA Holders hold: <span className={styles.data}>23.4% of the supply</span>
                  </p>
                </div>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.green)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Number of unique holders: <span className={styles.data}>123</span>
                  </p>
                </div>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.red)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Supply held by deployer: <span className={styles.data}>2.35%</span>
                  </p>
                </div>
              </div>
              <div className={styles.pieCon}>
                <Pie
                  data={{
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                          "#C32424",
                          "#31C324",
                          "#171717",
                          "#D9D9D9",
                        ],
                        borderWidth: 0,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.half}>
                <p className={styles.title}>TOKEN DEPLOYER ANALYSIS</p>
                {/* prettier-ignore */}
                <div className={styles.con}>
                  <p className={styles.attribute}>
                    Deployed: <span className={styles.data}>3 Days, 4 hours ago</span>
                  </p>
                  <p className={styles.attribute}>
                    Deployment transaction: <span className={styles.data}>0xDEAD...BEEF</span>
                  </p>
                  <p className={styles.attribute}>
                    Deployer net worth: <span className={styles.data}>$25,138</span>
                  </p>
                  <p className={styles.attribute}>
                    Deployer wallet age: <span className={styles.data}>3 weeks</span>
                  </p>
                  <p className={styles.attribute}>
                    Deployer wallet AML analysis: <span className={styles.data}>55.5% Suspicious</span>
                  </p>
                </div>
              </div>
              <div className={styles.half}>
                <p className={styles.title}>TOKEN RESOURCE CODE</p>
                {/* prettier-ignore */}
                <div className={styles.con}>
                <p className={styles.attribute}>
                  Code verified on explorer: <span className={styles.data}>True</span>
                </p>
                <p className={styles.attribute}>
                  Source contains suspicious code: <span className={styles.data}>True</span>
                </p>
                <p className={styles.attribute}>
                  Contract is proxy: <span className={styles.data}>False</span>
                </p>
                <p className={styles.attribute}>
                  Non-standard formatting: <span className={styles.data}>True</span>
                </p>
              </div>
              </div>
            </div>
            <div className={styles.chart}>
              <p className={styles.title}>TOKEN HOLDERS ANALYSIS</p>
              <div className={styles.legend}>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.black)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Top 10 EOA Holders hold: <span className={styles.data}>23.4% of the supply</span>
                  </p>
                </div>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.green)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Number of unique holders: <span className={styles.data}>123</span>
                  </p>
                </div>
                <div className={styles.leg}>
                  <div className={clsx(styles.color, styles.red)}></div>
                  {/* prettier-ignore */}
                  <p className={styles.attribute}>
                    Supply held by deployer: <span className={styles.data}>2.35%</span>
                  </p>
                </div>
              </div>
              <div className={styles.pieCon}>
                <Pie
                  data={{
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                          "#C32424",
                          "#31C324",
                          "#171717",
                          "#D9D9D9",
                        ],
                        borderWidth: 0,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
