import React from "react";
import Resume from "./Resume/Resume";
import MenuPopup from "./MenuPopup";
import Footer from "./Footer";
import openApi from "../utils/openApi";

function App() {
  const [resume, setResume] = React.useState({
    article: "Loading...",
    user: {
      name: "Name",
      surname: "Surname",
      telegram: "link",
      hard_skills: [{id: 1, order: 1, title: "Loading..."}],
    },
  });

  React.useEffect(() => {
    openApi.getResume(1).then((data) => setResume(data));
  }, []);

  return (
    <>
      <MenuPopup />
      <Resume {...resume} />
      <Footer />
    </>
  );
}

export default App;
