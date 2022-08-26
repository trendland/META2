import { FunctionComponent, useCallback, useEffect } from "react";
import styles from "./CardTop.module.css";

const CardTop: FunctionComponent = () => {
  const onFrameContainer18Click = useCallback(() => {
    // Please sync "NFT PRODUCT PAGE 1" to the project
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    window.location.href = "#";
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
    <div
      className={styles.frameDiv}
      id="header_card"
      onClick={onFrameContainer15Click}
      data-animate-on-scroll
    >
      <img className={styles.imageCardIcon} alt="" src="../image-card.svg" />
      <div className={styles.frameDiv1} onClick={onFrameContainer18Click}>
        <div className={styles.frameDiv2} id="card_info">
          <button className={styles.frameButton}>
            <div className={styles.rectangleDiv} />
            <div className={styles.maisonMetaDiv}>@maisonMeta</div>
          </button>
          <div className={styles.frameDiv3}>
            <h2 className={styles.rockHouse001H2}>RockHouse #001</h2>
            <div className={styles.eTHDiv}>1.5 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTop;
