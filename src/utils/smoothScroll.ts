const HEADER_HEIGHT = 80;

export const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();

  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  smoothScrollTo(href);
};
