export const renderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

export const renderDomComponent = (container, component, location) => {
    container.insertAdjacentHTML(location, component);
};