import React from "react";
import openApi from "../../utils/openApi";
import Bio from "./Bio";
import HardSkills from "./HardSkills";
import Education from "./Education";
import Languages from "./Languages";
import Article from "./Article";

function Resume() {
  const [resume, setResume] = React.useState({
    article: "Loading...",
    user: {
      name: "Name",
      surname: "Surname",
      telegram: "link",
      linkedin: "link",
      github: "link",
      hard_skills: [{ id: 1, order: 1, title: "Loading..." }],
      educations: [
        {
          id: 1,
          title: "education",
          courses: [
            {
              id: 1,
              title: "course",
              graduate_date: "2021-09-01T00:00:00.000000",
            },
          ],
        },
      ],
    },
  });

  React.useEffect(() => {
    openApi.getResume(1).then((data) => setResume(data));
  }, []);

  return (
    <>
      <header className="header">
        <Bio {...resume.user} />
        <HardSkills hardSkills={resume.user.hard_skills} />
        <Education educations={resume.user.educations} />
        <Languages />
      </header>
      <Article article={resume.article} />
    </>
  );
}

export default Resume;
