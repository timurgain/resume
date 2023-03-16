import React from "react";
import Resume from "./Resume/Resume";
import MenuPopup from "./MenuPopup";
import Footer from "./Footer";
import openApi from "../utils/openApi";

function App() {
  const [resume, setResume] = React.useState({
    article: "loading...",
    user: { name: "Name", surname: "Surname", telegram: "link" },
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
