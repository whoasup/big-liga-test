const intro = document.querySelector('.intro');
const breakpointMd = window.matchMedia('(max-width:1023px)');
intro.classList.remove('intro--show');

const initContent = () => {
  if (!intro) {
    return;
  }
  intro.classList.add('js-intro');
  intro.classList.add('intro--show');

  const contentSlide = document.querySelector('.intro__wrapper--blue');

  if (breakpointMd.matches) {
    document.addEventListener('click', (e) => {
      const isLogo = e.target.classList.contains('header__logo');
      if (!isLogo) {
        contentSlide.classList.toggle('intro__wrapper--show');
      }
    });
  }
};

export {
  initContent
};
