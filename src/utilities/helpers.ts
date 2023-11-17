export const scrollOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -48;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
