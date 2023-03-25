import React from "react";
import pdfConstructor from "../utils/PdfConstructor";

function MenuPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [btnMenuTextContent, setBtnMenuTextContent] = React.useState("Menu");

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        setIsOpen(false);
        setBtnMenuTextContent("Menu");
      }
    }
    function handleClickClose(evt) {
      const onPopupClick = [
        "popup-menu",
        "menu",
        "menu__item",
        "menu-btn",
      ].some((cls) => Array.from(evt.target.classList).includes(cls));
      if (!onPopupClick && isOpen) {
        setIsOpen(false);
        setBtnMenuTextContent("Menu");
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
      document.addEventListener("mousedown", handleClickClose);
    }
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [isOpen]);

  function handleMenuClick() {
    if (isOpen) {
      setIsOpen(false);
      setBtnMenuTextContent("Menu");
    } else {
      setIsOpen(true);
      setBtnMenuTextContent("Close");
    }
  }

  function handleSavePDF() {
    pdfConstructor.savePdfFile()
  }

  return (
    <>
      <button
        onClick={handleMenuClick}
        className="menu-btn"
        type="button"
        aria-label="Open menu"
      >
        {btnMenuTextContent}
      </button>

      {/* Popup menu */}
      <nav className={`popup popup-menu ${isOpen ? `popup_opened` : ``}`}>
        <ul className="menu">
          <li>
            <button
              onClick={handleSavePDF}
              className="menu__item save-pdf"
              type="button"
            >
              Save as PDF
            </button>
          </li>
          <li>
            <button className="menu__item share" type="button">
              Share
            </button>
          </li>
          <li>
            <button className="menu__item signup" type="button">
              Sign up
            </button>
          </li>
          <li>
            <button className="menu__item login" type="button">
              Log in | Edit
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuPopup;
