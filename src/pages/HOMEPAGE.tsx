import { FunctionComponent, useCallback, useEffect } from "react";
import RectangleIcon from "../components/RectangleIcon";
import HeaderMenu from "../components/HeaderMenu";
import MaisonMetaLogo from "../components/MaisonMetaLogo";
import CardTop from "../components/CardTop";
import styles from "./HOMEPAGE.module.css";

const HOMEPAGE: FunctionComponent = () => {
  const onGroupContainer6Click = useCallback(() => {
    // Please sync "NFT PRODUCT PAGE 1" to the project
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <main className={styles.hOMEPAGEMain} id="main">
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.lineDiv} />
          <div className={styles.rectangleDiv1} />
        </div>
        <div className={styles.frameDiv1}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.lineDiv1} />
          <div className={styles.rectangleDiv3} />
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.frameDiv4}>
          <div className={styles.groupDiv}>
            <RectangleIcon rectangle="../rectangle@2x.png" />
            <b className={styles.snowHouse001B}>
              <p className={styles.snowHouseP}>{`SnowHouse `}</p>
              <p className={styles.p}>#001</p>
            </b>
            <button className={styles.groupButton}>
              <button className={styles.rectangleButton} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle1@2x.png"
              />
              <div className={styles.maisonMetaDiv}>@maisonMeta</div>
              <div className={styles.rectangleDiv4} />
            </button>
            <b className={styles.eTHB}>1.5 ETH</b>
          </div>
          <div className={styles.groupDiv1}>
            <RectangleIcon rectangle="../rectangle2@2x.png" />
            <b className={styles.rockHouse001B}>
              <p className={styles.snowHouseP}>{`rockHouse `}</p>
              <p className={styles.p}>#001</p>
            </b>
            <div className={styles.groupDiv2}>
              <div className={styles.rectangleDiv5} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle1@2x.png"
              />
              <div className={styles.maisonMetaDiv1}>@maisonMeta</div>
              <div className={styles.rectangleDiv4} />
            </div>
            <b className={styles.eTHB1}>1.5 ETH</b>
          </div>
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.groupDiv}>
            <RectangleIcon rectangle="../rectangle4@2x.png" />
            <b className={styles.rockHouse001B}>
              <p className={styles.snowHouseP}>{`SnowHouse `}</p>
              <p className={styles.p}>#002</p>
            </b>
            <div className={styles.groupDiv2}>
              <div className={styles.rectangleDiv5} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle1@2x.png"
              />
              <div className={styles.maisonMetaDiv1}>@maisonMeta</div>
              <div className={styles.rectangleDiv4} />
            </div>
            <b className={styles.eTHB1}>1.5 ETH</b>
          </div>
          <div className={styles.groupDiv5} onClick={onGroupContainer6Click}>
            <RectangleIcon rectangle="../rectangle6@2x.png" />
            <b className={styles.rockHouse001B}>
              <p className={styles.snowHouseP}>{`rockHouse `}</p>
              <p className={styles.p}>#002</p>
            </b>
            <div className={styles.groupDiv2}>
              <div className={styles.rectangleDiv5} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle1@2x.png"
              />
              <div className={styles.maisonMetaDiv1}>@maisonMeta</div>
              <div className={styles.rectangleDiv4} />
            </div>
            <b className={styles.eTHB1}>1.5 ETH</b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv6}>
        <section className={styles.rectangleSection} />
      </div>
      <div className={styles.frameDiv7}>
        <div className={styles.maisonMetaDiv4}>Maison Meta</div>
        <b className={styles.fromAiGeneratedTo3DRender}>
          From ai generated to 3D rendering
        </b>
      </div>
      <HeaderMenu />
      <h1 className={styles.aiHumanProcessing3DC} data-animate-on-scroll>
        <p className={styles.snowHouseP}>
          Ai + Human + Processing + 3D Creation + MetaVerse Integration = All in
          on NFT
        </p>
      </h1>
      <img className={styles.image22Icon} alt="" src="../image22@2x.png" />
      <section
        className={styles.headerFrameSection}
        id="header"
        data-animate-on-scroll
      >
        <MaisonMetaLogo />
        <div className={styles.frameDiv8}>
          <h1
            className={styles.aiCraftedNFTCOLLECTIBLESFO}
            data-animate-on-scroll
          >
            <p className={styles.snowHouseP}>
              <span>{`ai crafted `}</span>
              <span className={styles.nFTSpan}>{`NFT `}</span>
            </p>
            <p className={styles.snowHouseP}>
              <span>{`COLLECTIBLES `}</span>
            </p>
            <p className={styles.snowHouseP}>
              <span>{`FOR THE `}</span>
            </p>
            <p className={styles.mETAVERSEP}>
              <span>METAVERSE</span>
            </p>
          </h1>
        </div>
        <CardTop />
      </section>
      <header className={styles.headerMenu} id="Nav">
        <div className={styles.rectangleDiv11} />
        <div className={styles.frameDiv9}>
          <div className={styles.frameDiv10}>
            <div className={styles.frameDiv11}>
              <div className={styles.maisonMetaDiv5}>Maison Meta</div>
            </div>
            <div className={styles.frameDiv12}>
              <input className={styles.groupInput} type="text" />
              <div className={styles.frameDiv13}>
                <b className={styles.about}>About</b>
                <b className={styles.dropsB}>Drops</b>
                <b className={styles.whitePaperB}>White Paper</b>
              </div>
            </div>
          </div>
          <button className={styles.connectWalletButton}>
            <div className={styles.frameDiv14}>
              <div className={styles.connectDiv}>Connect</div>
            </div>
          </button>
        </div>
      </header>
      <section className={styles.frameSection} id="section2">
        <img
          className={styles.frameIcon}
          alt=""
          src="../frame-226.svg"
          data-animate-on-scroll
        />
        <h3 className={styles.frameH3}>
          <b
            className={styles.withTheHelpOfAiGenerative}
            data-animate-on-scroll
          >{`With the help of Ai Generative tools, we created & crafted stunning luxury Homes that we then recreate in 3D renderings to model for any Metaverse of your choice, ie. Decentreland, Sandbox…`}</b>
        </h3>
      </section>
    </main>
  );
};

export default HOMEPAGE;
