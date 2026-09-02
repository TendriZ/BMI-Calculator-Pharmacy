'use client';

/**
 * Smoothly scrolls the window so the video showcase title
 * ('Research & Innovation Glucersen') lands exactly ~24px from the top of the viewport,
 * framing the title, subtitle, and the full video player within the visible screen,
 * exactly as shown in the design reference image.
 */
export const scrollToVideoSection = (offset = 24) => {
  if (typeof window === 'undefined') return;

  const headingEl = document.getElementById('video-heading') || document.querySelector('#video h2');
  if (!headingEl) {
    const videoSection = document.getElementById('video');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Use scrollIntoView with scroll-mt-6 support, plus fallback to window.scrollTo
  try {
    headingEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } catch {
    const targetY = Math.max(0, headingEl.getBoundingClientRect().top + window.scrollY - offset);
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }

  if (window.history.pushState) {
    window.history.pushState(null, '', '#video');
  }
};
