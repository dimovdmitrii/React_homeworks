import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const TextDisplay = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language === "en"
        ? "English language was chosen"
        : "Вы выбрали Русский язык"}
    </div>
  );
};

export default TextDisplay;
