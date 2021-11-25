import { createSiteMenuTemplate } from "./view/site-menu-view.js";
import { renderDomComponent, renderPosition } from "./render.js";



const siteMainElement = document.querySelector('.main');


renderDomComponent(siteMainElement, createSiteMenuTemplate(), renderPosition.BEFOREEND);
