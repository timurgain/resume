import html2pdf from '../vendors/html2pdf.js';

export class PdfConstructor {
  constructor(sourceElementSelector, selectors) {
    this._selectors = selectors
    this._sourceElement = document.querySelector(sourceElementSelector);
    this._options = {
      margin:       0,
      filename:     'timur_gain.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
      enableLinks: true
    };
  }

  _cloneElementForPdf() {
    return this._sourceElement.cloneNode(true);
  }

  _adaptElementForPdf(element) {
    element.classList.add(this._selectors.pagePdfMode);
    this._menuBtn = element.querySelector(this._selectors.menuBtn);
    this._menuBtn.classList.add(this._selectors.menuBtnPdfMode);
    element.querySelectorAll(this._selectors.link).forEach(link => {
      link.getAttribute('href').startsWith('https://')
        ? link.textContent = link.getAttribute('href').slice(8)
        : link.textContent = link.getAttribute('href')
    });
    return element
  }

  savePdfFile() {
    this._elementClone = this._cloneElementForPdf();
    this._elementForPdf = this._adaptElementForPdf(this._elementClone);
    html2pdf().set(this._options).from(this._elementForPdf).save();
  }

}
