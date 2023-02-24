import React from "react";
import BackgroundStars from "../BackgroundStars/BackgroundStars";
import styles from "./FourthSpace.module.css";

const FourthSpace = () => {
  return (
    <div className={styles.fourthSpace}>
      <p>Приклад із відео, але потрібно хорошої якості.</p>
      <BackgroundStars />
    </div>
  );
};

export default FourthSpace;
