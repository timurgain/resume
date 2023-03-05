function Article() {
  return (

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
      
  )
}


export default Article