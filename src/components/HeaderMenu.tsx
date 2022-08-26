import { FunctionComponent } from "react";
import styles from "./HeaderMenu.module.css";

const HeaderMenu: FunctionComponent = () => {
  return (
    <header className={styles.headerMenu} id="Nav">
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.frameDiv2}>
            <div className={styles.maisonMetaDiv}>Maison Meta</div>
          </div>
          <div className={styles.frameDiv3}>
            <input className={styles.groupInput} type="text" />
            <div className={styles.frameDiv4}>
              <b className={styles.about}>About</b>
              <b className={styles.dropsB}>Drops</b>
              <b className={styles.whitePaperB}>White Paper</b>
            </div>
          </div>
        </div>
        <button className={styles.connectWalletButton}>
          <div className={styles.frameDiv5}>
            <div className={styles.connectDiv}>Connect</div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default HeaderMenu;
