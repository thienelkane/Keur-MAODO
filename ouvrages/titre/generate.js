const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');

(async () => {
  const pdfOptions = JSON.parse(fs.readFileSync('./pdf-options.json', 'utf-8'));

  await mdToPdf({ path: './al_bourda.md' }, {
    stylesheet: './style.css',
    pdf_options: pdfOptions,
    dest: './al_bourda.pdf'
  });

  console.log('✅ PDF généré avec succès !');
})();
