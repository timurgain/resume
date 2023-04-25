import React from "react";
import Resume from "./Resume/Resume";
import MenuPopup from "./MenuPopup";
import Footer from "./Footer";

function App() {
  return (
    <>
      <MenuPopup />
      <Resume rusumeId={1} />
      <Footer />
    </>
  );
}

export default App;
