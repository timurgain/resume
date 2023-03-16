import defaultAvatarPath from "../../images/TM.jpg";

function Bio({name, surname, telegram, linkedin, github, ...props}) {
  return (
    <figure className="bio">
      <img className="bio__photo" src={defaultAvatarPath} alt="Avatar" />
      <figcaption>
        <h1 className="bio__name">{`${name} ${surname}`}</h1>
      </figcaption>
      <section aria-label="Contacts">
        <ul className="contacts">
          <li className="contacts__item">
            <a
              className="section__link"
              href={telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
          <li className="contacts__item">
            <a
              className="section__link"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="contacts__item">
            <a
              className="section__link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="contacts__item">timur.gain@gmail.com</li>
        </ul>
      </section>
    </figure>
  );
}

export default Bio;
