import { getEmptyListTemplate } from './view/list-empty-view.js';
import { getFilterTemplate } from './view/list-filter-view.js';
import { getNoExtraFilterTemplate } from './view/list-no-extra-view.js';
import { getNavigationTemplate } from './view/navigation-view.js';
import { getStatsTemplate } from './view/stats-view.js';
import { getUserRankTemplate } from './view/user-rank-view.js';
import { getSortTemplate } from './view/list-sort-view.js';
import { getListTemplate } from './view/list-view.js';
import { getLoadingTemplate } from './view/loading-view.js';
import { renderPopupTemplate } from './view/popup-view.js';
import { renderElements, renderDomElement, renderPosition, siteMainElement } from './render.js';
import { renderMockFilmCard, generateComment, renderPopupMockData } from './mock/mock-data.js';
import { renderFilmCard } from './view/film-card-view.js';

const mockCards = Array.from({length: 5}, renderMockFilmCard);


 const renderFilmsInContainer = (cards) => {
 renderDomElement(siteMainElement, getListTemplate(), renderPosition.BEFOREEND);
 const mockFilmCardContainer = document.querySelector('.films-list__container');
 for (let i = 0; i < cards.length; i++) {
      renderDomElement(mockFilmCardContainer, renderFilmCard(cards[i]), renderPosition.BEFOREEND);
 };
    renderDomElement(siteMainElement, renderPopupTemplate(renderPopupMockData(cards[0])), renderPosition.BEFOREEND);
 };

 renderFilmsInContainer(mockCards);
 