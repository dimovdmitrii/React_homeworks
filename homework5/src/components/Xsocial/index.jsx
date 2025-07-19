// src/components/xsocial/index.jsx
import React, { useState } from "react";
import styles from "./styles.module.css";

import XGreenIcon from "../../assets/icons/X.svg";
import XBlueIcon from "../../assets/icons/XBlue.svg";

const XsocialButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? XBlueIcon : XGreenIcon}
        className={styles.icon}
        alt="X Icon"
      />
    </button>
  );
};

export default XsocialButton;
