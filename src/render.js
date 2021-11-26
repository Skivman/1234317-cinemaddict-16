export const renderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const siteMainElement = document.querySelector('.main');

const renderDomElement = (container, markupText, location) => {
  container.insertAdjacentHTML(location, markupText);
};

export const renderElements = (elements) => {
  elements.forEach((element) => {
    renderDomElement(siteMainElement, element, renderPosition.BEFOREEND);
  });
};
