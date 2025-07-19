// src/components/google/index.jsx
import React, { useState } from "react";
import styles from "./styles.module.css";

import GoogleGreenIcon from "../../assets/icons/G.svg";
import GoogleBlueIcon from "../../assets/icons/GBlue.svg";

const GoogleButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? GoogleBlueIcon : GoogleGreenIcon}
        className={styles.icon}
        alt="Google Icon"
      />
    </button>
  );
};

export default GoogleButton;
