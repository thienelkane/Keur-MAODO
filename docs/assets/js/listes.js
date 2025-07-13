fetch('../ouvrages/list.json')
  .then(res => res.json())
  .then(data => {
    const desktopContainer = document.querySelector('.rt-home-two-award-contain-block');
    const mobileContainer = document.querySelector('.f-accordian-wrapper-2');

    let dropdownCount = 0;

    data.forEach(livre => {
      // Bloc Desktop
      const bloc = document.createElement('div');
      bloc.className = 'rt-home-two-award-grid';
      bloc.innerHTML = `
        <div class="rt-about-three-awards-heading-block">
          <div class="rt-component-heading-five rt-awards-text xassida_title">
            ${livre.titre}
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
      const id = ++dropdownCount;
      const toggleId = `w-dropdown-toggle-${id}`;
      const listId = `w-dropdown-list-${id}`;

      const accordion = document.createElement('div');
      accordion.className = 'f-accordian-dropdown-2 w-dropdown';
      accordion.setAttribute('data-delay', '0');
      accordion.setAttribute('data-hover', 'false');

      accordion.innerHTML = `
        <div class="f-accordian-toggle-2 w-dropdown-toggle" id="${toggleId}" aria-controls="${listId}" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
          <div class="f-accordian-title-wrapper-2">
            <div class="f-accordian-title-2 rt-component-heading-five rt-awards-text xassida_title">
              ${livre.titre}
            </div>
            <div class="f-accordian-icon-2 w-embed">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        <nav class="f-accordian-list-2 w-dropdown-list" id="${listId}" aria-labelledby="${toggleId}">
          <div class="f-accordian-content-2">
            <div class="triple_cta_container">
              <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_arabe}" target="_blank" tabindex="0"><div class="sysf-button-text">Arabe</div></a>
              <a class="sysf-button sysf-medium sysf-outline w-inline-block" href="${livre.pdf_transcrit}" target="_blank" tabindex="0"><div class="sysf-button-text">Arabe + Transcript</div></a>
              <a class="sysf-button sysf-medium w-inline-block" href="${livre.pdf_transcrit}" target="_blank" tabindex="0"><div class="sysf-button-text">Transcript</div></a>
            </div>
          </div>
        </nav>
      `;
      mobileContainer.appendChild(accordion);
    });
    
    // Force Webflow à réinitialiser les dropdowns
    if (typeof Webflow !== 'undefined' && Webflow.require) {
      const dropdown = Webflow.require('dropdown');
      if (dropdown && dropdown.ready) dropdown.ready();
    }

    // Attendre un court instant pour que le DOM soit mis à jour
    setTimeout(() => {
      if (typeof Webflow !== 'undefined') {
        Webflow.destroy();   // Supprime les bindings existants
        Webflow.ready();     // Recharge les interactions Webflow
        Webflow.require('ix2').init(); // Recharge les animations (si nécessaires)
      }
    }, 100);

  });
