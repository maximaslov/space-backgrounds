import React from "react";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import styles from "./ThirdSpace.module.css";

const ThirdSpace = () => {
  return (
    <>
      <p>Приклад із відео, але потрібно хорошої якості.</p>
      <div className={styles.thirdSpace}>
        <BackgroundVideo />
      </div>
    </>
  );
};

export default ThirdSpace;
