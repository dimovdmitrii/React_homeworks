import React, { useState } from "react";
import styles from "./styles.module.css";

import AppleGreenIcon from "../../assets/icons/A.svg";
import AppleBlueIcon from "../../assets/icons/ABlue.svg";

const AppleButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? AppleBlueIcon : AppleGreenIcon}
        className={styles.icon}
        alt="Apple Icon"
      />
    </div>
  );
};

export default AppleButton;
