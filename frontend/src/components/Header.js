import defaultAvatarPath from "../images/TM.jpg";


function Header() {
  return (

    <header className="header">
        <figure className="bio">
          <img className="bio__photo" src={defaultAvatarPath} alt="Avatar" />
          <figcaption>
            <h1 className="bio__name">Timur Gainutdinov</h1>
          </figcaption>
          <section aria-label="Contacts">
            <ul className="contacts">
              <li className="contacts__item">
                <a className="section__link" href="https://t.me/timur_gain"
                  target="_blank" rel="noreferrer">Telegram</a>
              </li>
              <li className="contacts__item">
                <a className="section__link" href="https://linkedin.com/in/timur-gainutdinov/"
                  target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li className="contacts__item">
                <a className="section__link" href="https://github.com/timurgain"
                  target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li className="contacts__item">timur.gain@gmail.com</li>
            </ul>
          </section>
        </figure>


        <section className="section">
          <h2 className="section__title">Hard skills</h2>
          <ul className="hard-skills">
            <li className="hard-skills__item">Python</li>
            <li className="hard-skills__item">Django</li>
            <li className="hard-skills__item">REST&nbsp;API</li>
            <li className="hard-skills__item">PostgreSQL</li>
            <li className="hard-skills__item">Redis</li>
            <li className="hard-skills__item">Docker</li>
            <li className="hard-skills__item">CSS</li>
            <li className="hard-skills__item">HTML</li>
            <li className="hard-skills__item">JavaScript</li>
            <li className="hard-skills__item">Git</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Education</h2>
          <p className="section__subtitle">I study at Yandex School of Data Analysis (Yandex.Practicum),
            here're the subjects:</p>
          <ul className="education">
            <li className="education__item">
              <p className="education__subject">Node.js, express.js</p>
              <p className="education__date">April 2023</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Interfaces using React</p>
              <p className="education__date">March 2023</p>
            </li>
            <li className="education__item">
              <p className="education__subject">JavaScript, OOP, Async, API, Webpack</p>
              <p className="education__date">January 2023</p>
            </li>
            <li className="education__item">
              <p className="education__subject">JavaScript fundamenals</p>
              <p className="education__date">November 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">HTML, CSS, BEM, Responsive layout</p>
              <p className="education__date">September 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Docker, DevOps, CI/CD</p>
              <p className="education__date">May 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Algorithms and data structures</p>
              <p className="education__date">March 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Django REST framework and API</p>
              <p className="education__date">January 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Django, OOP, Unittest</p>
              <p className="education__date">November 2021</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Python and SQL fundamentals</p>
              <p className="education__date">September 2021</p>
            </li>
          </ul>
        </section>

        <section className="section" aria-label="Languages">
          <h2 className="section__title">Languages</h2>
          <ul className="languages">
            <li className="languages__item">English B2 (study)</li>
            <li className="languages__item">Russian native</li>
          </ul>
        </section>
      </header>

  )
}


export default Header
