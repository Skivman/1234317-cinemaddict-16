import AbstractView from './abstract-view.js';

const renderFilmCard = (card) => {
  const {title, rating, year, duration, genre, poster, description, comments, watchlist} = card;

  return `<article class="film-card">
            <a class="film-card__link">
              <h3 class="film-card__title">${title}</h3>
              <p class="film-card__rating">${rating}</p>
              <p class="film-card__info">
                <span class="film-card__year">${year}</span>
                <span class="film-card__duration">${duration}</span>
                <span class="film-card__genre">${genre}</span>
              </p>
              <img src="./images/posters/${poster}" alt="" class="film-card__poster">
              <p class="film-card__description">${description}</p>
              <span class="film-card__comments">${comments}</span>
            </a>
            <div class="film-card__controls">
              <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}" type="button">Add to watchlist</button>
              <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
              <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
            </div>
          </article>`;
};

export default class CardView extends AbstractView {
  #card = null;

  constructor(card) {
    super();
    this.#card = card;
  }

  get template() {
    return renderFilmCard(this.#card);
  }

  setOpenPopupClickHandler = (callback) => {
    this._callback.openClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#openClickHandler);
  }

  setToggleWatchListClickHandler = (callback) => {
    this._callback.watchlistClick = callback;
    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this.#watchListClickHandler);
  }


  setToggleWatchedButtonClickHandler = () => {
    const watchedButton = this.element.querySelector('.film-card__controls-item--mark-as-watched');
    watchedButton.addEventListener('click', this.#watchedListClickHandler);
  }


  setToggleFavoriteClickHandler = () => {
    const favoriteButton = this.element.querySelector('.film-card__controls-item--favorite');
    favoriteButton.addEventListener('click', () => {
      favoriteButton.classList.toggle('film-card__controls-item--active');
    });
  }

  #watchedListClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchedLisyClick();
  }

  #watchListClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  #openClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.openClick();
  }
}
