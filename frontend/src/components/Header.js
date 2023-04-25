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
                <a className="section__link" href="https://github.com/timurgain"
                  target="_blank" rel="noreferrer">GitHub</a>
              </li>

              {/* <li className="contacts__item">
                <a className="section__link" href="https://t.me/timur_gain"
                  target="_blank" rel="noreferrer">Telegram</a>
              </li> */}

              <li className="contacts__item">
                <a className="section__link" href="https://linkedin.com/in/timur-gainutdinov/"
                  target="_blank" rel="noreferrer">LinkedIn</a>
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
            <li className="hard-skills__item">Flask</li>
            <li className="hard-skills__item">API</li>
            <li className="hard-skills__item">JS</li>
            <li className="hard-skills__item">TS</li>
            <li className="hard-skills__item">React.js</li>
            <li className="hard-skills__item">Node.js</li>
            <li className="hard-skills__item">SQL</li>
            <li className="hard-skills__item">Redis</li>
            <li className="hard-skills__item">Mongo</li>
            <li className="hard-skills__item">Docker</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Education</h2>
          <p className="section__subtitle">At Codecademy.com:</p>
          <ul className="education">
            <li className="education__item">
              <p className="education__subject">TypeScript, Redux.js</p>
              <p className="education__date">June 2023</p>
            </li>
          </ul>
          <p className="section__subtitle">At Yandex School of Data Analysis:</p>
          <ul className="education">
            <li className="education__item">
              <p className="education__subject">Node.js, Express.js</p>
              <p className="education__date">April 2023</p>
            </li>
            <li className="education__item">
              <p className="education__subject">JavaScript, Async, React.js</p>
              <p className="education__date">January 2023</p>
            </li>
            <li className="education__item">
              <p className="education__subject">HTML, CSS, Responsive web layout</p>
              <p className="education__date">September 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Docker, Nginx, DevOps, CI/CD</p>
              <p className="education__date">May 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Algorithms and data structures</p>
              <p className="education__date">March 2022</p>
            </li>
            <li className="education__item">
              <p className="education__subject">Django, Unittest, REST API</p>
              <p className="education__date">December 2021</p>
            </li>
            <li className="education__item">
              <p className="education__subject">SQL, Python and OOP</p>
              <p className="education__date">September 2021</p>
            </li>
          </ul>
          <p className="section__subtitle">At Moscow State Technical University</p>
          <ul className="education">
            <li className="education__item">
              <p className="education__subject">Technical subjects, management</p>
              <p className="education__date">Finished in 2010</p>
            </li>
          </ul>
        </section>

        <section className="section" aria-label="Languages">
          <h2 className="section__title">Languages</h2>
          <ul className="languages">
            <li className="languages__item">English B2</li>
            <li className="languages__item">Russian native</li>
          </ul>
        </section>
      </header>

  )
}


export default Header
