import React from "react";
import styles from "./SecondSpace.module.css";

const SecondSpace = () => {
    return (
        <div className={styles.firstSpace}>
            <p>Теж саме що і Space 1, але з туманом.</p>
            <div className={styles.stars}></div>
            <div className={styles.clouds}></div>
            <div className={styles.twinkling}></div> 
        </div>
    )
}

export default SecondSpace;