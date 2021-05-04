const initPreloader = (cb) => {
  const preloader = document.querySelector('.preloader');
  if (!preloader) {
    return;
  }
  const animationDuration = preloader.dataset.duration;

  const showPreloader = () => {
    preloader.classList.add('js-preloader');
    document.body.classList.add('scroll-lock');

    setTimeout(() => {
      preloader.classList.add('is-loading');
    }, animationDuration);

    document.addEventListener('keydown', preloaderKeydownHandler);
    document.addEventListener('click', preloaderClickHandler);
  };

  const hidePreloader = () => {
    preloader.classList.add('is-hidden');

    setTimeout(() => {
      preloader.classList.remove('js-preloader');
    }, animationDuration);
    document.body.classList.remove('scroll-lock');

    document.removeEventListener('keydown', preloaderKeydownHandler);
    document.removeEventListener('click', preloaderClickHandler);
    if (cb) {
      setTimeout(() => {
        cb();
      }, animationDuration);
    }
  };

  const preloaderKeydownHandler = (e) => {
    const isEnterOrEscKey = e.key === 'Enter' || e.key === 'Escape' || e.key === 'Esc';
    if (isEnterOrEscKey) {
      hidePreloader();
    }
  };

  const preloaderClickHandler = () => {
    hidePreloader();
  };

  showPreloader();
};

export {
  initPreloader
};
