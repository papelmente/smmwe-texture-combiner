document.addEventListener('DOMContentLoaded', () => {
  const videoConfig = {
    // Add each language's URLs independently when they are available.
    es: {
      installAndroid: '',
      installPc: '',
      createAndroid: '',
      createPc: ''
    },
    en: {
      installAndroid: '',
      installPc: '',
      createAndroid: '',
      createPc: ''
    },
    pt: {
      installAndroid: '',
      installPc: '',
      createAndroid: '',
      createPc: ''
    }
  };

  const tools = [
    { key: 'libresprite', image: '3librespritelogo.png', url: 'https://github.com/LibreSprite/LibreSprite/releases' },
    { key: 'piskel', image: '4piskellogo.png', url: 'https://www.piskelapp.com/' },
    { key: 'zarchiver', image: '5zarchiverlogo.png', url: 'https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver' }
  ];

  const text = {
    es: {
      'nav.label': 'Secciones principales',
      'nav.install': 'Instalar texturas',
      'nav.create': 'Crear texturas',
      'nav.resources': 'Recursos',
      'install.title': 'Instalar texturas',
      'install.intro': 'Selecciona tu plataforma para consultar el tutorial. Los videos y las notas complementarias se añadirán cuando estén disponibles.',
      'platform.android': 'Android',
      'platform.pc': 'PC',
      'video.pending': 'Tutorial próximamente',
      'video.invalid': 'La URL configurada no es compatible.',
      'video.installAndroid.title': 'Tutorial de instalación para Android',
      'video.installPc.title': 'Tutorial de instalación para PC',
      'video.createAndroid.title': 'Tutorial para crear texturas en Android',
      'video.createPc.title': 'Tutorial para crear texturas en PC',
      'install.notes': 'Descripción, advertencias y notas complementarias pendientes.',
      'create.title': 'Crear texturas',
      'create.intro': 'Elige tu plataforma para ver el tutorial. Los videos se añadirán cuando estén disponibles.',
      'advice.title': 'Aspectos y consejos para crear texturas',
      'advice.alpha.title': 'Transparencia y canal alfa:',
      'advice.sprites': 'Practica crear y editar sprites con una herramienta de dibujo.',
      'advice.alpha': 'Conserva la transparencia cuando el diseño la necesite.',
      'advice.dimensions.title': 'Dimensiones y resolución:',
      'advice.dimensions': 'Consulta la plantilla como referencia antes de editar.',
      'advice.formats.title': 'Formatos:',
      'advice.formats': 'Comprueba que el formato exportado sea compatible con tu flujo de trabajo.',
      'advice.folders.title': 'Carpetas:',
      'advice.folders': 'Organiza los archivos y conserva nombres fáciles de identificar.',
      'advice.zip.title': 'Paquetes ZIP:',
      'advice.zip': 'Revisa el contenido del paquete antes de compartirlo.',
      'advice.errors.title': 'Errores comunes:',
      'advice.errors': 'Comprueba dimensiones, transparencia, nombres y archivos incluidos.',
      'resources.title': 'Recursos',
      'resources.catalog': 'Catálogo de texturas actualizadas',
      'resources.catalogCard': 'Paquetes y actualizaciones',
      'resources.catalogDescription': 'Consulta los paquetes de texturas disponibles y sus actualizaciones en la comunidad.',
      'resources.catalogAlt': 'Catálogo de paquetes de texturas',
      'resources.catalogButton': 'Ver catálogo en Discord',
      'resources.creators': 'Recursos para creadores',
      'resources.template': 'Plantilla de texturas originales',
      'resources.templateDescription': 'Accede a la plantilla de texturas originales para utilizarla como base de tus propias creaciones.',
      'resources.templateAlt': 'Plantilla de texturas originales',
      'resources.templateButton': 'Abrir plantilla en Discord',
      'resources.tools': 'Herramientas gratuitas para crear texturas',
      'resources.community': 'Comunidad',
      'resources.discord': 'Acceso a la comunidad de Engine Kingdom.',
      'resources.discordAlt': 'Logo de Discord',
      'resources.discordButton': 'Unirse a Discord',
      'resources.youtube': 'Canal de World Engine Academy.',
      'resources.youtubeAlt': 'Logo de YouTube y World Engine Academy',
      'resources.youtubeButton': 'Visitar YouTube',
      'tool.open': 'Visitar sitio',
      'tool.libresprite.name': 'LibreSprite',
      'tool.libresprite.description': 'Editor de pixel art de código abierto para PC; también cuenta con soporte para algunas tabletas Android compatibles.',
      'tool.piskel.name': 'Piskel',
      'tool.piskel.description': 'Editor gratuito de sprites y animaciones que se utiliza desde el navegador.',
      'tool.zarchiver.name': 'ZArchiver',
      'tool.zarchiver.description': 'Aplicación para Android para gestionar archivos comprimidos, incluidos paquetes ZIP.',
      'faq.title': 'Preguntas frecuentes',
      'faq.q1': 'Se podran añadir más texturas?',
      'faq.a1': 'Probablemente si, apenas esta iniciando y a partir de las opiniones de los usuarios se tomara en cuenta.',
      'faq.q2': 'Qué pasa si dos texturas tienen el mismo nombre/sprites?',
      'faq.a2': 'El nombre da igual, lo que hara la pagina es solo descomprimir los archivos. Pero ojo con los sprites, ya que esta lo va a sobreescribir.',
      'faq.q3': 'Mi textura no se ha integrado al juego',
      'faq.a3': 'Asegurate que el archivo .zip tenga las imagenes, si se encuentra dentro de una carpeta la página no lo leera.',
      'faq.q4': 'Me aparecio "Error: JSZip library is not loaded"',
      'faq.a4': 'Revisa bien tu conexión a internet, si tu internet es lento, podria no descargar el archivo JSZip desde la CDN. También podria ser porque el CDN esta caido o bloqueado.',
      'faq.q5': 'Encontre otro error que no aparece aquí',
      'faq.a5': 'Si en dado caso sucediera, comunicate con papermind (@papermente) por Discord.',
      'credit.contribution': 'Interfaz y recursos'
    },
    en: {
      'nav.label': 'Main sections',
      'nav.install': 'Install textures',
      'nav.create': 'Create textures',
      'nav.resources': 'Resources',
      'install.title': 'Install textures',
      'install.intro': 'Choose your platform to view its tutorial. Videos and supplementary notes will be added when available.',
      'platform.android': 'Android',
      'platform.pc': 'PC',
      'video.pending': 'Tutorial coming soon',
      'video.invalid': 'The configured URL is not supported.',
      'video.installAndroid.title': 'Android texture installation tutorial',
      'video.installPc.title': 'PC texture installation tutorial',
      'video.createAndroid.title': 'Android texture creation tutorial',
      'video.createPc.title': 'PC texture creation tutorial',
      'install.notes': 'Description, warnings, and supplementary notes to come.',
      'create.title': 'Create textures',
      'create.intro': 'Choose your platform to view its tutorial. Videos will be added when available.',
      'advice.title': 'Texture creation topics and tips',
      'advice.alpha.title': 'Transparency and alpha channel:',
      'advice.sprites': 'Practice creating and editing sprites with an image editor.',
      'advice.alpha': 'Preserve transparency when the design requires it.',
      'advice.dimensions.title': 'Image dimensions and resolution:',
      'advice.dimensions': 'Use the template as a reference before editing.',
      'advice.formats.title': 'File formats:',
      'advice.formats': 'Check that the exported format works with your workflow.',
      'advice.folders.title': 'Folders:',
      'advice.folders': 'Organize files and use easy-to-identify names.',
      'advice.zip.title': 'ZIP packages:',
      'advice.zip': 'Check the contents of the package before sharing it.',
      'advice.errors.title': 'Common issues:',
      'advice.errors': 'Check image dimensions, transparency, filenames, and included files.',
      'resources.title': 'Resources',
      'resources.catalog': 'Updated texture catalog',
      'resources.catalogCard': 'Texture packs and updates',
      'resources.catalogDescription': 'Browse available texture packs and their updates in the community.',
      'resources.catalogAlt': 'Texture pack catalog',
      'resources.catalogButton': 'View catalog on Discord',
      'resources.creators': 'Creator resources',
      'resources.template': 'Original texture template',
      'resources.templateDescription': 'Get the original texture template to use as a base for your own creations.',
      'resources.templateAlt': 'Original texture template',
      'resources.templateButton': 'Open template on Discord',
      'resources.tools': 'Free texture creation tools',
      'resources.community': 'Community',
      'resources.discord': 'Join the Engine Kingdom community.',
      'resources.discordAlt': 'Discord logo',
      'resources.discordButton': 'Join Discord',
      'resources.youtube': 'World Engine Academy channel.',
      'resources.youtubeAlt': 'YouTube and World Engine Academy logo',
      'resources.youtubeButton': 'Visit YouTube',
      'tool.open': 'Visit website',
      'tool.libresprite.name': 'LibreSprite',
      'tool.libresprite.description': 'Open-source pixel art editor for PC; it also supports some compatible Android tablets.',
      'tool.piskel.name': 'Piskel',
      'tool.piskel.description': 'Free sprite and animation editor that runs in a web browser.',
      'tool.zarchiver.name': 'ZArchiver',
      'tool.zarchiver.description': 'Android app for managing compressed files, including ZIP packages.',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Can more textures be added?',
      'faq.a1': 'Probably. The project is just getting started, and user feedback will be taken into account.',
      'faq.q2': 'What happens if two textures have the same name/sprites?',
      'faq.a2': 'The name does not matter; the page simply extracts the files. Be careful with sprites, though, as one may overwrite the other.',
      'faq.q3': 'My texture was not integrated into the game',
      'faq.a3': 'Make sure the ZIP file contains the images directly. The page will not read them if they are inside a folder.',
      'faq.q4': 'I got "Error: JSZip library is not loaded"',
      'faq.a4': 'Check your internet connection. A slow connection may prevent JSZip from loading from the CDN; the CDN may also be down or blocked.',
      'faq.q5': 'I found another error that is not listed here',
      'faq.a5': 'If this happens, contact papermind (@papermente) on Discord.',
      'credit.contribution': 'Interface and resources'
    },
    pt: {
      'nav.label': 'Seções principais',
      'nav.install': 'Instalar texturas',
      'nav.create': 'Criar texturas',
      'nav.resources': 'Recursos',
      'install.title': 'Instalar texturas',
      'install.intro': 'Escolha sua plataforma para ver o tutorial. Os vídeos e as observações complementares serão adicionados quando estiverem disponíveis.',
      'platform.android': 'Android',
      'platform.pc': 'PC',
      'video.pending': 'Tutorial em breve',
      'video.invalid': 'A URL configurada não é compatível.',
      'video.installAndroid.title': 'Tutorial de instalação de texturas para Android',
      'video.installPc.title': 'Tutorial de instalação de texturas para PC',
      'video.createAndroid.title': 'Tutorial de criação de texturas para Android',
      'video.createPc.title': 'Tutorial de criação de texturas para PC',
      'install.notes': 'Descrição, avisos e observações complementares pendentes.',
      'create.title': 'Criar texturas',
      'create.intro': 'Escolha sua plataforma para ver o tutorial. Os vídeos serão adicionados quando estiverem disponíveis.',
      'advice.title': 'Tópicos e dicas para criar texturas',
      'advice.alpha.title': 'Transparência e canal alfa:',
      'advice.sprites': 'Pratique criar e editar sprites com um editor de imagens.',
      'advice.alpha': 'Mantenha a transparência quando o design precisar dela.',
      'advice.dimensions.title': 'Dimensões e resolução:',
      'advice.dimensions': 'Consulte o modelo como referência antes de editar.',
      'advice.formats.title': 'Formatos:',
      'advice.formats': 'Verifique se o formato exportado é compatível com seu fluxo de trabalho.',
      'advice.folders.title': 'Pastas:',
      'advice.folders': 'Organize os arquivos e use nomes fáceis de identificar.',
      'advice.zip.title': 'Pacotes ZIP:',
      'advice.zip': 'Confira o conteúdo do pacote antes de compartilhá-lo.',
      'advice.errors.title': 'Erros comuns:',
      'advice.errors': 'Confira as dimensões, a transparência, os nomes e os arquivos incluídos.',
      'resources.title': 'Recursos',
      'resources.catalog': 'Catálogo de texturas atualizado',
      'resources.catalogCard': 'Pacotes de texturas e atualizações',
      'resources.catalogDescription': 'Consulte os pacotes de texturas disponíveis e suas atualizações na comunidade.',
      'resources.catalogAlt': 'Catálogo de pacotes de texturas',
      'resources.catalogButton': 'Ver catálogo no Discord',
      'resources.creators': 'Recursos para criadores',
      'resources.template': 'Modelo de texturas originais',
      'resources.templateDescription': 'Acesse o modelo de texturas originais para usá-lo como base para suas criações.',
      'resources.templateAlt': 'Modelo de texturas originais',
      'resources.templateButton': 'Abrir modelo no Discord',
      'resources.tools': 'Ferramentas gratuitas para criar texturas',
      'resources.community': 'Comunidade',
      'resources.discord': 'Acesse a comunidade Engine Kingdom.',
      'resources.discordAlt': 'Logo do Discord',
      'resources.discordButton': 'Entrar no Discord',
      'resources.youtube': 'Canal da World Engine Academy.',
      'resources.youtubeAlt': 'Logo do YouTube e da World Engine Academy',
      'resources.youtubeButton': 'Visitar YouTube',
      'tool.open': 'Visitar site',
      'tool.libresprite.name': 'LibreSprite',
      'tool.libresprite.description': 'Editor de pixel art de código aberto para PC; também oferece suporte a alguns tablets Android compatíveis.',
      'tool.piskel.name': 'Piskel',
      'tool.piskel.description': 'Editor gratuito de sprites e animações que funciona no navegador.',
      'tool.zarchiver.name': 'ZArchiver',
      'tool.zarchiver.description': 'Aplicativo Android para gerenciar arquivos compactados, incluindo pacotes ZIP.',
      'faq.title': 'Perguntas frequentes',
      'faq.q1': 'É possível adicionar mais texturas?',
      'faq.a1': 'Provavelmente. O projeto está apenas começando, e as opiniões dos usuários serão consideradas.',
      'faq.q2': 'O que acontece se duas texturas tiverem o mesmo nome/sprites?',
      'faq.a2': 'O nome não importa; a página apenas extrai os arquivos. Mas atenção aos sprites, pois um pode sobrescrever o outro.',
      'faq.q3': 'Minha textura não foi integrada ao jogo',
      'faq.a3': 'Verifique se o arquivo ZIP contém as imagens diretamente. A página não as encontrará se estiverem dentro de uma pasta.',
      'faq.q4': 'Apareceu "Error: JSZip library is not loaded"',
      'faq.a4': 'Verifique sua conexão com a internet. Uma conexão lenta pode impedir o carregamento do JSZip pela CDN; a CDN também pode estar indisponível ou bloqueada.',
      'faq.q5': 'Encontrei outro erro que não está listado aqui',
      'faq.a5': 'Se isso acontecer, entre em contato com papermind (@papermente) pelo Discord.',
      'credit.contribution': 'Interface e recursos'
    }
  };

  const createElement = (tagName, className, textContent) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  };

  const getVideoSource = (value) => {
    if (!value) return null;
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return { type: 'youtube', id: value };

    let parsed;
    try {
      parsed = new URL(value);
    } catch {
      return null;
    }

    const host = parsed.hostname.toLowerCase().replace(/^www\./, '');
    const youtubeId = host === 'youtu.be'
      ? parsed.pathname.slice(1)
      : ['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)
        ? parsed.searchParams.get('v') || parsed.pathname.match(/\/embed\/([^/]+)/)?.[1]
        : null;
    if (youtubeId) return { type: 'youtube', id: youtubeId };

    const vimeoId = host === 'vimeo.com'
      ? parsed.pathname.match(/\/(\d+)/)?.[1]
      : host === 'player.vimeo.com'
        ? parsed.pathname.match(/\/video\/(\d+)/)?.[1]
        : null;
    if (vimeoId) return { type: 'vimeo', id: vimeoId };

    if (['http:', 'https:'].includes(parsed.protocol) && /\.(mp4|webm|ogg)$/i.test(parsed.pathname)) {
      return { type: 'file', url: parsed.href };
    }
    return null;
  };

  const renderVideo = (container, url, title, locale) => {
    if (!container) return;
    container.classList.remove('has-video');
    container.replaceChildren();
    const video = getVideoSource(url);

    if (!video) {
      container.textContent = url ? text[locale]['video.invalid'] : text[locale]['video.pending'];
      return;
    }

    const player = createElement(video.type === 'file' ? 'video' : 'iframe', 'video-frame');
    if (video.type === 'file') {
      player.controls = true;
      player.preload = 'metadata';
      player.src = video.url;
      player.setAttribute('aria-label', title);
    } else {
      player.title = title;
      player.loading = 'lazy';
      player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      player.allowFullscreen = true;
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      player.src = video.type === 'youtube'
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}`
        : `https://player.vimeo.com/video/${encodeURIComponent(video.id)}`;
    }
    container.classList.add('has-video');
    container.append(player);
  };

  const renderTools = (locale) => {
    const container = document.getElementById('tools-list');
    container.replaceChildren();
    tools.forEach((tool) => {
      const card = createElement('article', 'content-card');
      const image = createElement('img', 'resource-image');
      image.src = `images/resources/${tool.image}`;
      image.alt = text[locale][`tool.${tool.key}.name`];
      card.append(
        image,
        createElement('h3', '', text[locale][`tool.${tool.key}.name`]),
        createElement('p', '', text[locale][`tool.${tool.key}.description`])
      );
      const link = createElement('a', 'resource-button', text[locale]['tool.open']);
      link.href = tool.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      card.append(link);
      container.append(card);
    });
  };

  const applyLanguage = (locale) => {
    const language = text[locale] ? locale : 'es';
    document.documentElement.lang = language;

    document.querySelectorAll('[data-site-i18n]').forEach((element) => {
      const value = text[language][element.dataset.siteI18n];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll('[data-site-i18n-attr]').forEach((element) => {
      const [attribute, key] = element.dataset.siteI18nAttr.split(':');
      const value = text[language][key];
      if (value !== undefined) element.setAttribute(attribute, value);
    });

    document.querySelectorAll('[data-video-placeholder]').forEach((container) => {
      const key = container.dataset.videoPlaceholder;
      renderVideo(container, videoConfig[language][key], text[language][`video.${key}.title`], language);
    });

    renderTools(language);
  };

  document.addEventListener('site-language-change', (event) => {
    applyLanguage(event.detail.language);
  });

  applyLanguage('es');

  const views = Array.from(document.querySelectorAll('[data-view]'));
  const navigationLinks = Array.from(document.querySelectorAll('.section-nav a'));
  const viewIds = new Set(views.map((view) => view.id));

  const updateView = () => {
    const requestedId = window.location.hash.slice(1);
    const activeId = viewIds.has(requestedId) ? requestedId : 'combiner';
    views.forEach((view) => {
      view.hidden = view.id !== activeId;
    });

    navigationLinks.forEach((link) => {
      if (link.hash === `#${activeId}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  window.addEventListener('hashchange', updateView);
  updateView();
});
