document.addEventListener('DOMContentLoaded', () => {
  const slotsContainer = document.querySelector('.slots-container');
  const btnPlus = document.querySelector('.button-plus');
  const btnCombine = document.querySelector('.button-combine');

  const MAX_SLOTS = 6;
  const MIN_SLOTS = 2;
  
  let loadedFiles = [];

  // Input file oculto global
  const globalFileInput = document.createElement('input');
  globalFileInput.type = 'file';
  globalFileInput.accept = '.zip';
  globalFileInput.style.display = 'none';
  document.body.appendChild(globalFileInput);

  let activeSlotIndex = null;

  globalFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0] && activeSlotIndex !== null) {
      const activeSlot = slotsContainer.querySelectorAll('.slot-card')[activeSlotIndex];
      handleFileSelect(e.target.files[0], activeSlot, activeSlotIndex);
    }
    globalFileInput.value = '';
  });

  function setupSlotEvents(slotEl, index) {
    slotEl.addEventListener('click', (e) => {
      e.stopPropagation();
      activeSlotIndex = index;
      globalFileInput.click();
    });

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      slotEl.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });

    const dashedBox = slotEl.querySelector('.dashed-box');
    ['dragenter', 'dragover'].forEach(eventName => {
      slotEl.addEventListener(eventName, () => {
        if (dashedBox) {
          dashedBox.style.borderColor = '#fcd200';
          dashedBox.style.backgroundColor = 'rgba(252, 210, 0, 0.15)';
        }
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      slotEl.addEventListener(eventName, () => {
        if (dashedBox) {
          dashedBox.style.borderColor = '#ffffff';
          dashedBox.style.backgroundColor = 'transparent';
        }
      });
    });

    slotEl.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        handleFileSelect(dt.files[0], slotEl, index);
      }
    });
  }

  function handleFileSelect(file, slotEl, index) {
    if (!file.name.toLowerCase().endsWith('.zip')) {
      alert(currentLang === 'es' ? 'Por favor, selecciona un archivo comprimido .zip válido' : 'Please select a valid .zip compressed file');
      return;
    }

    loadedFiles[index] = file;

    const label = slotEl.querySelector('.label');
    const icon = slotEl.querySelector('.icon');
    const dashedBox = slotEl.querySelector('.dashed-box');

    if (icon) icon.textContent = '✅';
    if (label) label.textContent = file.name;
    if (dashedBox) dashedBox.style.borderColor = '#4CAF50';
  }

  function createNewSlot() {
    const currentSlots = slotsContainer.querySelectorAll('.slot-card').length;

    if (currentSlots >= MAX_SLOTS) {
      alert(currentLang === 'es' 
        ? `Has alcanzado el límite! Solo puedes combinar hasta ${MAX_SLOTS} texturas a la vez` 
        : `You have reached the limit! You can only combine up to ${MAX_SLOTS} textures at once`);
      return;
    }

    const newIndex = currentSlots;
    const newSlot = document.createElement('div');
    newSlot.classList.add('slot-card');
    
    const dragText = translations[currentLang].dragZip;

    newSlot.innerHTML = `
      <div class="dashed-box">
        <span class="icon">📦</span>
        <span class="label" data-i18n="dragZip">${dragText}</span>
      </div>
    `;

    slotsContainer.appendChild(newSlot);
    setupSlotEvents(newSlot, newIndex);
  }

  const initialSlots = slotsContainer.querySelectorAll('.slot-card');
  initialSlots.forEach((slot, index) => {
    setupSlotEvents(slot, index);
  });

  if (btnPlus) {
    btnPlus.addEventListener('click', createNewSlot);
  }

  // =========================================================
  // LÓGICA DE COMBINACIÓN Y DESCOMPRESIÓN CON JSZIP
  // =========================================================
  if (btnCombine) {
    btnCombine.addEventListener('click', async () => {
      const validFiles = loadedFiles.filter(f => f !== undefined && f !== null);

      if (validFiles.length < MIN_SLOTS) {
        alert(currentLang === 'es' 
          ? `Debes cargar al menos ${MIN_SLOTS} archivos .zip para poder combinarlos` 
          : `You must load at least ${MIN_SLOTS} .zip files to combine them`);
        return;
      }

      if (typeof JSZip === 'undefined') {
        alert('Error: JSZip library is not loaded');
        return;
      }

      btnCombine.disabled = true;
      btnCombine.style.opacity = '0.6';

      try {
        const finalZip = new JSZip();

        for (const file of validFiles) {
          const zipInstance = new JSZip();
          const contents = await zipInstance.loadAsync(file);

          for (const [relativePath, zipEntry] of Object.entries(contents.files)) {
            if (!zipEntry.dir) {
              const fileData = await zipEntry.async('blob');
              finalZip.file(relativePath, fileData);
            }
          }
        }

        const outputBlob = await finalZip.generateAsync({ type: 'blob' });

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(outputBlob);
        downloadLink.download = 'combined_texture.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        alert(currentLang === 'es' 
          ? 'Texturas combinadas con éxito! Tu descarga comenzará en breve :3' 
          : 'Textures combined successfully! Your download will start shortly :3');

      } catch (error) {
        console.error('Error al procesar los archivos ZIP:', error);
        alert(currentLang === 'es' 
          ? 'Ocurrio un error al procesar las texturas.. Asegurate que los archivos .zip esten correctos' 
          : 'An error occurred while processing the textures.. Please make sure the .zip files are valid');
      } finally {
        btnCombine.disabled = false;
        btnCombine.style.opacity = '1';
      }
    });
  }

  // =========================================================
  // VENTANA EMERGENTE (MODAL) DE CRÉDITOS
  // =========================================================
  const creditsModal = document.getElementById('credits-modal');
  const creditsBtn = document.getElementById('credits-toggle-btn');
  const closeCreditsBtn = document.getElementById('close-credits-btn');

  if (creditsBtn && creditsModal) {
    creditsBtn.addEventListener('click', () => {
      creditsModal.classList.add('active');
    });
  }

  if (closeCreditsBtn && creditsModal) {
    closeCreditsBtn.addEventListener('click', () => {
      creditsModal.classList.remove('active');
    });
  }

  if (creditsModal) {
    creditsModal.addEventListener('click', (e) => {
      if (e.target === creditsModal) {
        creditsModal.classList.remove('active');
      }
    });
  }

// =========================================================
  // TRADUCCIONES E IDIOMAS
  // =========================================================
  const translations = {
    es: {
      tabTitle: "Pon aquí tus texturas!",
      dragZip: "Arrastra un archivo .zip",
      instruction: 'Dale al "+" para añadir más texturas',
      combineBtn: "Combinar Texturas",
      btnLabel: "EN",
      creditsBtn: "Créditos",

      // Créditos
      creditsTitle: "Créditos",
      byWord: "por",
      project1: "Super Mario Bros. Wonder Button",
      project2: "Super Mario Bros. Wonder Font Pack",
      project3: "Pantalla de carga de Mario Wonder",
      thanksTitle: "Agradecimientos",
      thanksText: "Todos mis amiguitos y a ti! :3",
      tagline: "De Engineer para Engineers.",
      madeBy: "Hecho por papermind (@papermente)",
    },
    en: {
      tabTitle: "Place your textures here!",
      dragZip: "Drag a .zip file",
      instruction: 'Click "+" to add more textures',
      combineBtn: "Combine Textures",
      btnLabel: "ES",
      creditsBtn: "Credits",

      // Credits
      creditsTitle: "Credits",
      byWord: "by",
      project1: "Super Mario Bros. Wonder Button",
      project2: "Super Mario Bros. Wonder Font Pack",
      project3: "Mario Wonder Loading Screen",
      thanksTitle: "Special Thanks",
      thanksText: "All my friends and you! :3",
      tagline: "From Engineer to Engineers.",
      madeBy: "Made by papermind (@papermente)",
    }
  };

  let currentLang = 'es';

  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = document.getElementById('lang-text');

 // Lógica de traducción de etiquetas data-i18n
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      
      if (langText) {
        langText.textContent = translations[currentLang].btnLabel;
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
          el.textContent = translations[currentLang][key];
        }
      });
    });
  }

});
