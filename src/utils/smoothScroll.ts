export const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  
  if (href === '#') {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  smoothScrollTo(href);
};