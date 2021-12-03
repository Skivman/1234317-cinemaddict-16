import { getEmptyListTemplate } from './view/list-empty-view.js';
import { getFilterTemplate } from './view/list-filter-view.js';
import { getNoExtraFilterTemplate } from './view/list-no-extra-view.js';
import { getNavigationTemplate } from './view/navigation-view.js';
import { getStatsTemplate } from './view/stats-view.js';
import { getUserRankTemplate } from './view/user-rank-view.js';
import { getSortTemplate } from './view/list-sort-view.js';
import { getListTemplate } from './view/list-no-extra-view.js';
import { getLoadingTemplate } from './view/loading-view.js';
import { renderPopupTemplate } from './view/popup-view.js';
import { renderElements, renderDomElement, renderPosition, siteMainElement } from './render.js';
import { renderMockFilmCard, generateComment, renderPopupMockData } from './mock/mock-data.js';
import { renderFilmCard } from './film-card-template.js';
import { renderMockComment } from './view/popup-comment-view.js';

//Массив моковых карточек с описанием фильмов
const mockCards = Array.from({length: 15}, renderMockFilmCard);

//Общая функция для отрисовки карточек на странице и добавлению попапа
 const renderFilmsInContainer = (cards) => {
    const MAX_CARDS = 5;
 renderDomElement(siteMainElement, getListTemplate(), renderPosition.BEFOREEND);
 const mockFilmCardContainer = document.querySelector('.films-list__container');
 for (let i = 0; i < MAX_CARDS; i++) {
   renderDomElement(mockFilmCardContainer, renderFilmCard(cards[i]), renderPosition.BEFOREEND);
 };
 };
//Функция отрисовки попапа
 const renderPopup = (cards) => {
   renderDomElement(siteMainElement, renderPopupTemplate(renderPopupMockData(cards[0])), renderPosition.BEFOREEND);
   const popup = document.querySelector('.film-details');
   const popupCloseButton = document.querySelector('.film-details__close-btn');
   const commentsList = document.querySelector('.film-details__comments-list');
   const randomComment = renderMockComment(generateComment())
  renderDomElement(commentsList, randomComment, renderPosition.BEFOREEND);
   popupCloseButton.addEventListener('click', () => {
      popup.classList.add('visually-hidden');
   })
   document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
         popup.classList.add('visually-hidden');
      }
   })
 };

 renderFilmsInContainer(mockCards);
 renderPopup(mockCards);
 showExtra(mockCards);
 