import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "fr", lang: "French" },
    { code: "ur", lang: "Urdu" },
  ];
  const handleLanguageChange = (lg) => {
    i18n.changeLanguage(lg);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  const { line1 } = t("description");
  // console.log(description);
  return (
    <>
      <div className="container">
        <div className="btns">
          {languages.map((lg) => (
            <button
              key={lg.code}
              className={i18n.language === lg.code ? "selected" : ""}
              onClick={() => handleLanguageChange(lg.code)}
            >
              {" "}
              {lg.lang}{" "}
            </button>
          ))}
        </div>
        <h1>{t("greeting")}</h1>
        {/* <p>{line1}</p> */}
        <p>
          <Trans
            i18nKey={line1}
            values={{ designation: "React Developer" }}
            components={{ 1: <b /> }}
          />
        </p>
      </div>
    </>
  );
}

export default App;
