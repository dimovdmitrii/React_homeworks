// src/components/apple/index.jsx
import React, { useState } from "react";
import styles from "./styles.module.css";

// Импортируем SVG как React-компоненты
// Убедись, что Vite настроен для обработки SVG как компонентов (например, через vite-plugin-svgr)
// Или используй ?react синтаксис, если у тебя Vite 2.9+ и plugin-react
import AppleGreenIcon from "../../assets/icons/A.svg";
import AppleBlueIcon from "../../assets/icons/ABlue.svg";

const AppleButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? AppleBlueIcon : AppleGreenIcon}
        className={styles.icon}
        alt="Apple Icon"
      />
    </button>
  );
};

export default AppleButton;
