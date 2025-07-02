fetch('https://thienelkane.github.io/keur-maodo/ouvrages/list.json')
  .then(res => res.json())
  .then(data => {
    const desktopContainer = document.querySelector('.rt-home-two-award-contain-block');
    const mobileContainer = document.querySelector('.f-accordian-wrapper-2');

    data.forEach(livre => {
      // Bloc Desktop / Tablette
      const bloc = document.createElement('div');
      bloc.className = 'rt-home-two-award-grid';
      bloc.innerHTML = `
        <div class="rt-about-three-awards-heading-block">
          <div class="rt-component-heading-five rt-awards-text xassida_title">
            ${livre.titre} – ${livre.auteur}
          </div>
          <div class="rt-award-grid-background"></div>
        </div>
        <div class="triple_cta_container">
          <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_arabe}" target="_blank"><div class="sysf-button-text">Arabe</div></a>
          <a class="sysf-button sysf-medium sysf-outline w-inline-block" href="${livre.pdf_transcrit}" target="_blank"><div class="sysf-button-text">Arabe + Transcript</div></a>
          <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_transcrit}" target="_blank"><div class="sysf-button-text">Transcript</div></a>
        </div>
      `;
      desktopContainer.appendChild(bloc);

      // Accordéon Mobile
      const accordion = document.createElement('div');
      accordion.className = 'f-accordian-dropdown-2 w-dropdown';
      accordion.innerHTML = `
        <div class="f-accordian-toggle-2 w-dropdown-toggle">
          <div class="f-accordian-title-wrapper-2">
            <div class="f-accordian-title-2 rt-component-heading-five rt-awards-text xassida_title">${livre.titre} – ${livre.auteur}</div>
            <div class="f-accordian-icon-2 w-embed">
              <svg fill="none" height="24" width="24" viewBox="0 0 24 24">
                <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        <nav class="f-accordian-list-2 w-dropdown-list">
          <div class="f-accordian-content-2">
            <div class="triple_cta_container">
              <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_arabe}" target="_blank"><div class="sysf-button-text">Arabe</div></a>
              <a class="sysf-button sysf-medium sysf-outline w-inline-block" href="${livre.pdf_transcrit}" target="_blank"><div class="sysf-button-text">Arabe + Transcript</div></a>
              <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_transcrit}" target="_blank"><div class="sysf-button-text">Transcript</div></a>
            </div>
          </div>
        </nav>
      `;
      mobileContainer.appendChild(accordion);
    });
  });
