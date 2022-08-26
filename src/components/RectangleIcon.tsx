import { FunctionComponent } from "react";
import styles from "./RectangleIcon.module.css";

type RectangleIconType = {
  rectangle?: string;
};

const RectangleIcon: FunctionComponent<RectangleIconType> = ({ rectangle }) => {
  return <img className={styles.rectangleIcon} alt="" src={rectangle} />;
};

export default RectangleIcon;
