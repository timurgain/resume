function Article() {
  return (
    <main className="content">
      <section className="section">
        <h2 className="section__title">Experience</h2>
        <p className="section__paragraph section__paragraph_layout_above-list">
          Python developer | alfabook.ru | 2019-2023
        </p>
        <ul className="list">
          <li className="list__item">
            Developed and maintained a web application for internal automation
            of work processes with customers and suppliers, using Python, Flask,
            SQLAlchemy, Redis Queue, HTML, Bootstrap, and Docker.
          </li>
          <li className="list__item">
            Reduced the time for routine operations from ~20 clicks to 1-2
            clicks, and enabled orders to be managed through the sales funnel
            without the participation of an employee.
          </li>
          <li className="list__item">
            Simplified work with external services such as CRM, cash register
            equipment, Slack and Discord notifications, delivery services.
          </li>
          <li className="list__item">
            Organized order picking through the web interface.
          </li>
        </ul>

        <p className="section__paragraph section__paragraph_layout_above-list">
          Business manager | alfabook.ru | 2010-2023
        </p>
        <ul className="list">
          <li className="list__item">
            Managed the online store website, including content management and
            setting tasks for web studios.
          </li>
          <li className="list__item">
            Promoted the store through Yandex.Direct, Google Ads, FB Ads, and
            analytics.
          </li>
          <li className="list__item">
            Managed pricing, stock of goods, and rules for working with
            customers.
          </li>
          <li className="list__item">
            Managed the work process for employees, including hiring and
            temporary work.
          </li>
        </ul>
        <p className="section__paragraph">
          Starting in 2010, I co-founded and grew an offline store with a team
          of three individuals into a successful online business with over
          100,000 orders in the past five years and a team of up to 15
          individuals (dec 2022). Acquired valuable skills in management,
          internet marketing, and web development through this experience.
        </p>
      </section>

      {/* <section className="section">
          <h2 className="section__title">Can do now</h2>
          <ul className="list">
            <li className="list__item">Django web-application</li>
            <li className="list__item">REST API</li>
            <li className="list__item">Chat bot</li>
            <li className="list__item">Responsive web layout</li>
            <li className="list__item">CI/CD with GitHub Actions or BitBucket Pipelines</li>
          </ul>
          <a className="section__link" href="https://github.com/timurgain" target="_blank" rel="noreferrer">Portfolio on GitHub</a>
        </section> */}

      <section className="section">
        <h2 className="section__title">Universal skills</h2>
        <p className="section__paragraph section__paragraph_layout_above-list">
          Throughout my career with wide area of responsibility and education
          with strict deadlines I have developed a range of skills that are
          applicable across various fields and industries, including:
        </p>
        <ul className="list">
          <li className="list__item">
            Skilled in problem-solving, from performing tasks to organizing
            teams.
          </li>
          <li className="list__item">
            Effective communication with colleagues and customers.
          </li>
          <li className="list__item">
            Ability to break down complex tasks into simpler ones.
          </li>
          <li className="list__item">
            Timely problem-solving and excellent self-discipline.
          </li>
          <li className="list__item">
            Experienced in managing multiple tasks across different subjects.
          </li>
          <li className="list__item">
            Open to new ideas, feedback, and input to drive better solutions.
          </li>
          <li className="list__item">Critical thinking skills.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section__title">About</h2>
        <p className="section__paragraph">
          I can keep up a conversation about technology, science, bikes,
          computer games, planets, or discuss the fate of the Karamazov brothers
          and Frank Algernon Cowperwood.
        </p>
        <p className="section__paragraph">
          I am interested in web development projects that align with my values
          and contribute to society.
        </p>
        <p className="section__paragraph">
          I am open to relocation and am constantly seeking opportunities to
          learn and grow.
        </p>
      </section>
    </main>
  );
}

export default Article;
