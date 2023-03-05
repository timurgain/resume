import React from "react";
import defaultAvatarPath from "../images/TM.jpg";

function App() {
  return (
    <>
      <button className="menu-btn" type="button" aria-label="Open menu">Menu</button>

      {/* Popup menu */}
      <nav className="popup popup-menu">
        <ul className="menu">
          <li><button className="menu__item save-pdf" type="button">Save as PDF</button></li>
          <li><button className="menu__item share" type="button">Share</button></li>
          <li><button className="menu__item signup" type="button">Sign up</button></li>
          <li><button className="menu__item login" type="button">Log in | Edit</button></li>
        </ul>
      </nav>

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

      <main className="content">

        <section className="section">
          <h2 className="section__title">Experience in development</h2>
          <p className="section__paragraph">
            In September 2019 with two teammates began development the Flask web application for automating routine work processes.
          </p>
          <p className="section__paragraph">
            After three months we released a minimum viable program, that was a great expansion of horizons and a breakthrough in efficiency - until recently, we did something in 20 clicks,
            then just 1-2 clicks or completely without man participation. That time we felt like we were doing some kind of magic :)
          </p>
          <p className="section__paragraph">
            For the project I attracted an experienced developer as a mentor, thanks to him we got acquainted with
            Python, Flask, Redis Queue, PostgreSQL, Git and APIs of third-party services.
          </p>
          <p className="section__paragraph section__paragraph_layout_above-list">
            Until spring 2021, we continued to develop the web application, as a result, business processes were digitized:
          </p>
          <ul className="list">
            <li className="list__item">customer order processing, address processing, tagging, product availability check,</li>
            <li className="list__item">creating a requirement for a supplier based on the balance, expectations, reserve at the supplier,</li>
            <li className="list__item">receiving information about payments through the banking service via API,</li>
            <li className="list__item">automatic notifications to customers via SMS and email services,</li>
            <li className="list__item">notifications in Slack, then in Discord.</li>
          </ul>

          <p className="section__paragraph">
            Now we support the application and fix bugs.
            Since September 2021 I have been devoting more time to training in specialized  programming courses.
          </p>
        </section>

        <section className="section">
          <h2 className="section__title">Can do now</h2>
          <ul className="list">
            <li className="list__item">Django web-application</li>
            <li className="list__item">REST API</li>
            <li className="list__item">Chat bot</li>
            <li className="list__item">Responsive web layout</li>
            <li className="list__item">CI/CD with GitHub Actions or BitBucket Pipelines</li>
          </ul>
          <a className="section__link" href="https://github.com/timurgain" target="_blank" rel="noreferrer">Portfolio on GitHub</a>
        </section>

        <section className="section">
          <h2 className="section__title">Universal skills</h2>
          <p className="section__paragraph">
            I combine development with a management position where I am responsible for
            promotion, sales, an online store, motivation and organization of work processes for employees.
          </p>
          <p className="section__paragraph section__paragraph_layout_above-list">
            This wide area of responsibility
            and education with strict deadlines taught me universal skills:
          </p>
          <ul className="list">
            <li className="list__item">Feeling a lack of knowledge motivates me to learn;</li>
            <li className="list__item">Able to get information in documentation, lectures and communication with people;</li>
            <li className="list__item">Understand how to divide a complex task into a set of simple ones;</li>
            <li className="list__item">Self-discipline helps me complete tasks on time, especially in high workload;</li>
            <li className="list__item">Cope with the flow of various tasks, build priorities, determine resources and deadlines;</li>
            <li className="list__item">Understand the importance of communication and cooperation;</li>
            <li className="list__item">I am prone to critical thinking, ready to new inputs and feedback, it leads to better solutions.</li>
          </ul>
        </section>

      </main>

      <footer className="footer">
        <p className="footer__paragraph">Timur Gainutdinov, web-developer | october 2022, learning continues</p>
      </footer>
    </>
  );
}

export default App;
