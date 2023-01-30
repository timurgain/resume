import './index.css'; // webpack needs it

import { menuBtn, savePdfBtn, pageSelectors } from '../components/constants.js';
import { PopupMenu } from '../components/PopupMenu.js';
import { PdfConstructor } from '../components/PdfConstructor.js';


// main

// instances

const menuPopup = new PopupMenu('.popup-menu', menuBtn);
menuPopup.setEventListeners();

const pdfConstructor = new PdfConstructor('.page', pageSelectors);


// listeners

menuBtn.addEventListener('click', () => {
  if (document.querySelector('.popup_opened')) {
    menuPopup.close()
  } else {
    menuPopup.open()
  }
});

savePdfBtn.addEventListener('click', () => {
  menuPopup.close();
  pdfConstructor.savePdfFile();
})
