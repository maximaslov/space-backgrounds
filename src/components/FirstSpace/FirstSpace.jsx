import React from "react";
import styles from "./FirstSpace.module.css";

const FirstSpace = () => {
    return (
        <div className={styles.firstSpace}>
            <p>PNG + CSS. Колір зірок не можна змінити. Інших варіантів не знайшов</p>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div> 
            <div className={styles.clouds}></div>
        </div>
    )
}

export default FirstSpace;