export const renderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const siteMainElement = document.querySelector('.main');

const renderDomComponent = (container, component, location) => {
  container.insertAdjacentHTML(location, component);
};

export const renderComponents = (arr) => {
  arr.forEach((component) => {
    renderDomComponent(siteMainElement, component, renderPosition.BEFOREEND);
  });
};
