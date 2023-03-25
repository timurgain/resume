const React = require("react");

function Education({ educations, ...props }) {

  // const [educations, setEducations] = React.useState(educationsInitial);

  // React.useEffect(() => {

  //   function sortEducations() {
  //     const edu = educations.map((element) => {
  //       console.log(typeof element.courses)
  //       return element.courses.sort(
  //         (a, b) => new Date(b.graduate_date) - new Date(a.graduate_date)
  //       );
  //     });
  //     edu.sort(
  //       (a, b) =>
  //         new Date(a.courses[0].graduate_date) -
  //         new Date(b.courses[0].graduate_date)
  //     );
  //     return edu
  //   }

  //   const sortedEdu = sortEducations()
  //   setEducations(sortedEdu)

  // }, [educations])

  function sortEducations() {
    educations.forEach((element) => {
      element.courses.sort(
        (a, b) => new Date(b.graduate_date) - new Date(a.graduate_date)
      );
    });
    educations.sort(
      (a, b) =>
        new Date(a.courses[0].graduate_date) -
        new Date(b.courses[0].graduate_date)
    );
  }

  function getEducationsMarkup() {
    sortEducations();
    return educations.map((education) => {
      return (
        <li key={education.id}>
          <p key={education.id} className="section__subtitle">
            {education.title}
          </p>
          <ul className="education">{getCoursesMarkup(education.courses)}</ul>
        </li>
      );
    });
  }

  function getCoursesMarkup(courses) {
    console.log(typeof courses, educations)
    return courses.map((course) => {
      return (
        <li key={course.id} className="education__item">
          <p className="education__subject">{course.title}</p>
          <p className="education__date">
            {getMonthYear(course.graduate_date)}
          </p>
        </li>
      );
    });
  }

  function getMonthYear(dateStrISO) {
    return new Date(dateStrISO).toLocaleString("en-us", {
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="section">
      <h2 className="section__title">Education</h2>
      <ul className="education">{getEducationsMarkup()}</ul>
    </section>
  );
}

export default Education;
