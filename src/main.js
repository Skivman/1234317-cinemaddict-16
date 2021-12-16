// import { getEmptyListTemplate } from './view/list-empty-view.js';
// import { getFilterTemplate } from './view/list-filter-view.js';
// import { getNoExtraFilterTemplate } from './view/list-no-extra-view.js';
import { getNavigationTemplate } from './view/navigation-view.js';
import { getStatsTemplate } from './view/stats-view.js';
// import { getUserRankTemplate } from './view/user-rank-view.js';
// import { getSortTemplate } from './view/list-sort-view.js';
import ListView from './view/list-no-extra-view.js';
// import { getLoadingTemplate } from './view/loading-view.js';
import { renderPopupTemplate } from './view/popup-view.js';
import { renderTemplate, renderPosition, renderElement } from './render.js';
import { renderMockFilmCard, renderMockPopup } from './mock/mock-data.js';
import CardView from './film-card-template.js';
// import { renderMockComment } from './view/popup-comment-view.js';

//Массив моковых карточек с описанием фильмов
const mockCards = Array.from({length: 24}, renderMockFilmCard);
const MAX_CARDS = 5;
const siteMainElement = document.querySelector('.main');

const listView = new ListView();
renderElement(siteMainElement, listView.element, renderPosition.BEFOREEND);
renderElement(listView.element, new CardView(mockCards[0]).element, renderPosition.BEFOREEND);
// for (let i = 0; i < MAX_CARDS; i++) {
//   renderElement(listView.element, new CardView(mockCards[i]).element, renderPosition.BEFOREEND);
// }
//Логика кнопки 'Show more'
// let offset = MAX_CARDS;
// showMoreButton.addEventListener('click', () => {
//   const nextFive = mockCards.slice(offset, offset + MAX_CARDS);
//   nextFive.forEach((card) => {
//     renderTemplate(mockFilmCardContainer, renderFilmCard(card), renderPosition.BEFOREEND);
//   });
//   offset += MAX_CARDS;
//   if (offset >= mockCards.length) {
//     showMoreButton.classList.add('visually-hidden');
//   }
// });

// renderTemplate(siteMainElement, renderPopupTemplate(renderMockPopup(mockCards[0])), renderPosition.BEFOREEND);
// const popupWindow = document.querySelector('.film-details');
// const closePopup = document.querySelector('.film-details__close-btn');
// closePopup.addEventListener('click', () => {
//   popupWindow.classList.add('visually-hidden');
// });
