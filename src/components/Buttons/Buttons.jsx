import React from "react";
import styles from "./Buttons.module.css";
import Button from "./Button";

const Buttons = ({setCurrentBg, currentBg}) => {

    return (
        <div className={styles.btns}>
            <Button currentBg={currentBg} setCurrentBg={setCurrentBg} bg={1} text='Space 1'/>
            <Button currentBg={currentBg} setCurrentBg={setCurrentBg} bg={2} text='Space 2'/>
            <Button currentBg={currentBg} setCurrentBg={setCurrentBg} bg={3} text='Spase 3'/>
        </div>
    )
}

export default Buttons;