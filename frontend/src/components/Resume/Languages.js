import React from "react";

function Languages({ languages, ...props }) {
  React.useMemo(() => {
    languages.sort((a, b) => a.order - b.order);
  }, [languages]);

  function getLanguagesMarkup() {
    return languages.map((language) => {
      return (
        <li key={language.id} className="languages__item">
          {[language.title, language.level].join(" ")}
        </li>
      );
    });
  }

  return (
    <section className="section" aria-label="Languages">
      <h2 className="section__title">Languages</h2>
      <ul className="languages">{getLanguagesMarkup()}</ul>
    </section>
  );
}

export default Languages;
