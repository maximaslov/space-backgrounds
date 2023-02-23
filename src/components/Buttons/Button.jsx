import React, { useState } from "react";
import styles from "./Buttons.module.css";

const Button = ({text, setCurrentBg, currentBg, bg}) => {

    const setBg = () => {
        setCurrentBg(bg);
    }

    return (
        <button 
            data-text="Awesome" 
            onClick={setBg}
            className={currentBg === bg ? styles.buttonActive : styles.button}>{text}
        </button>
    )
}

export default Button;