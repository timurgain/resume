import Bio from "./Bio";
import HardSkills from "./HardSkills";
import Education from "./Education";
import Languages from "./Languages";
import Article from "./Article";

function Resume({ user, article, ...props }) {
  return (
    <>
      <header className="header">
        <Bio {...user} />
        <HardSkills />
        <Education />
        <Languages />
      </header>
      <Article article={article} />
    </>
  );
}

export default Resume;
