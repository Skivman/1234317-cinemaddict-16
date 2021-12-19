import ListView from './view/list-no-extra-view.js';
import { renderPosition, render } from './render.js';
import { generateCard } from './mock/mock-data.js';
import CardView from './film-card-template.js';
import ShowMore from './view/show-more-button-view.js';
import PopupView from './view/popup-view.js';
import NavigationView from './view/navigation-view.js';
import SortView from './view/list-sort-view.js';
import EmptyList from './view/list-empty-view.js';

const renderCard = (cardListElement, card) => {
  const cardComponent = new CardView(card);
  const cardPopup = new PopupView(card);

  const openPopup = () => {
    cardListElement.appendChild(cardPopup.element);
  };

  const closePopup = () => {
    cardListElement.removeChild(cardPopup.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      closePopup();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
    openPopup();
    document.addEventListener('keydown', onEscKeyDown);
  });

  cardPopup.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
    closePopup();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(cardListElement, cardComponent.element, renderPosition.BEFOREEND);
};

//Массив моковых карточек с описанием фильмов
const FILM_QUANTITY = 15;
const mockCards = Array.from({length: FILM_QUANTITY}, generateCard);
const MAX_CARDS = 5;
const siteMainElement = document.querySelector('.main');

render(siteMainElement, new NavigationView().element, renderPosition.BEFOREEND);

if (mockCards.every((card) => card.isArchive)) {
  render(siteMainElement, new EmptyList().element, renderPosition.BEFOREEND);
} else {
  render(siteMainElement, new SortView().element, renderPosition.BEFOREEND);

  const filmsSection = new ListView();
  render(siteMainElement, filmsSection.element, renderPosition.BEFOREEND);
  const cardContainer = filmsSection.element.querySelector('.films-list__container');
  for (let i = 0; i < MAX_CARDS; i++) {
    renderCard(cardContainer, mockCards[i]);
  }

  const showMoreButton = new ShowMore();
  const filmsListSection = filmsSection.element.querySelector('.films-list');
  render(filmsListSection, showMoreButton.element, renderPosition.BEFOREEND);
  //Логика кнопки 'Show more'
  let offset = MAX_CARDS;
  showMoreButton.element.addEventListener('click', () => {
    const nextFive = mockCards.slice(offset, offset + MAX_CARDS);
    nextFive.forEach((card) => {
      renderCard(cardContainer, card);
    });
    offset += MAX_CARDS;
    if (offset >= mockCards.length) {
      showMoreButton.element.remove();
      showMoreButton.removeElement();
    }
  });
}
