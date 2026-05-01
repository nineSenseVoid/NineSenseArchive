(function () {
  const protectedSelectors = [
    '.entry-card',
    '.work-cover',
    '.detail-main',
    '.reading-article',
    '#readingContent',
    '#novelContent'
  ].join(',');

  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest(protectedSelectors)) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  document.addEventListener('selectstart', (e) => {
    if (e.target.closest(protectedSelectors)) {
      e.preventDefault();
    }
  });

  document.addEventListener('copy', (e) => {
    if (e.target.closest(protectedSelectors)) {
      e.preventDefault();
    }
  });
})();
