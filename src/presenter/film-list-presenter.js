/* eslint-disable no-mixed-spaces-and-tabs */
import ListView from '../view/films-section-view.js';
import { renderPosition, render } from '../render.js';
import ShowMore from '../view/show-more-button-view.js';
import NavigationView from '../view/navigation-view.js';
import SortView from '../view/list-sort-view.js';
import EmptyList from '../view/list-empty-view.js';
import FilmsListSection from '../view/films-list-section-view.js';
import FilmContainer from '../view/film-container-view.js';
import FilmPresenter from './film-presenter.js';

const MAX_CARDS = 5;

export default class FilmListPresenter {
    #listContainer = null;

    #listComponent = new ListView();
    #filmsListSectionComponent = new FilmsListSection();
    #filmContainerComponent = new FilmContainer();
    #sortComponent = new SortView();
    #emptyListComponent = new EmptyList();
    #navigationComponent = new NavigationView();
    #showMoreComponent = new ShowMore();

    #filmCards = [];

    constructor(listContainer) {
      this.#listContainer = listContainer;
    }

    init = (filmCards) => {
      this.#filmCards = [...filmCards];

      this.#renderNavigation();
      this.#renderSort();
      this.#renderMainListContainer();
      this.#renderFilmsListSection();
      this.#renderFilmContainer();
      this.#renderList();
    }

    #renderMainListContainer = () => {
      render(this.#listContainer, this.#listComponent.element, renderPosition.BEFOREEND);
    }

    #renderFilmsListSection = () => {
      render(this.#listComponent.element, this.#filmsListSectionComponent.element, renderPosition.BEFOREEND);
    }

    #renderFilmContainer = () => {
      render(this.#filmsListSectionComponent.element, this.#filmContainerComponent.element, renderPosition.BEFOREEND);
    }

    #renderNavigation = () => {
      render(this.#listContainer, this.#navigationComponent.element, renderPosition.AFTERBEGIN);
    }

    #renderSort = () => {
      render(this.#listContainer, this.#sortComponent.element, renderPosition.BEFOREEND);
    }

    #renderList = () => {
      if (this.#filmCards.every((card) => card.isArchive)) {
        this.#renderEmptyList();
	      return;
      }
      this.#renderCardList();
    }

    #renderCardList = () => {
      this.#renderCards(0, Math.min(this.#filmCards.length, MAX_CARDS));

      if (this.#filmCards.length > MAX_CARDS) {
        this.#renderShowMoreButton();
      }
    }

    #renderShowMoreButton = () => {
      let renderedCardCount = MAX_CARDS;

      render(this.#listContainer, this.#showMoreComponent.element, renderPosition.BEFOREEND);

      this.#showMoreComponent.setClickHandler(() => {
        this.#filmCards
          .slice(renderedCardCount, renderedCardCount + MAX_CARDS)
          .forEach((filmCard) => this.#renderCard(this.#filmContainerComponent.element, filmCard));

        renderedCardCount += MAX_CARDS;

        if (renderedCardCount >= this.#filmCards.length) {
          this.#showMoreComponent.element.remove();
        }
      });
    }

    #renderCards = (from, to) => {
      this.#filmCards
        .slice(from, to)
        .forEach((filmCard) => this.#renderCard(this.#filmContainerComponent.element, filmCard));
    }

    #renderCard = (container, card) => {
      const cardInContainer = new FilmPresenter();
      cardInContainer.init(container, card);
    };

    #renderEmptyList = () => {
      render(this.#listComponent, this.#emptyListComponent, renderPosition.AFTERBEGIN);
    }
}

