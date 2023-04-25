import React from "react";

function Education({ educations, ...props }) {
  React.useMemo(() => {
    educations.forEach((edu) => {
      edu.courses.sort(
        (a, b) => new Date(b.graduate_date) - new Date(a.graduate_date)
      );
    });
    educations.sort(
      (a, b) =>
        new Date(b.courses[0].graduate_date) -
        new Date(a.courses[0].graduate_date)
    );
  }, [educations]);

  function getEducationsMarkup() {
    return educations.map((education) => {
      return (
        <li key={education.id} className="education__school">
          <p key={education.id} className="section__subtitle">
            {education.title}
          </p>
          <ul className="education">{getCoursesMarkup(education.courses)}</ul>
        </li>
      );
    });
  }

  function getCoursesMarkup(courses) {
    return courses.map((course) => {
      return (
        <li key={course.id} className="education__course">
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
