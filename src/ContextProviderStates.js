import { useState } from "react";

export const ContextProviderStates = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(0);

  return {
    theme,
    setTheme,
    language,
    setLanguage,
  };
};
