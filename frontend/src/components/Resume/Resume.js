import React from "react";
import openApi from "../../utils/openApi";
import Bio from "./Bio";
import HardSkills from "./HardSkills";
import Education from "./Education";
import Languages from "./Languages";
import Article from "./Article";
import defaultAvatarPath from "../../images/bag-on-head.png";

function Resume() {
  const [avatarUrl, setAvatarUrl] = React.useState(defaultAvatarPath)
  const [resume, setResume] = React.useState({
    article: "waiting for data...",
    user: {
      name: "Name",
      surname: "Surname",
      telegram: "link",
      linkedin: "link",
      github: "link",
      hard_skills: [{ id: 1, order: 1, title: "waiting for data..." }],
      educations: [
        {
          id: 1,
          title: "education",
          courses: [
            {
              id: 1,
              title: "waiting for data...",
              graduate_date: "2021-09-01T00:00:00.000000",
            },
          ],
        },
      ],
      languages: [{ id: 1, order: 1, title: "waiting for data...", level: "" }],
    },
  });

  React.useEffect(() => {
    openApi.getResume(1).then((data) => setResume(data));
    openApi.getImage(1).then((url) => setAvatarUrl(url));
  }, []);



  return (
    <>
      <header className="header">
        <Bio {...resume.user} avatarUrl={avatarUrl} />
        <HardSkills hardSkills={resume.user.hard_skills} />
        <Education educations={resume.user.educations} />
        <Languages languages={resume.user.languages} />
      </header>
      <Article article={resume.article} />
    </>
  );
}

export default Resume;
