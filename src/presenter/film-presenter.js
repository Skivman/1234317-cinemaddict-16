import CardView from '../view/film-card-view.js';
import { render, renderPosition, remove } from '../render.js';
import PopupView from '../view/popup-view.js';

export default class FilmPresenter {
    #film = null;
    #container = null;
    #filmCardComponent = null;
    #popupComponent = null;
    #changeData = null;

    constructor(changeData) {
      this.#changeData = changeData;
    }

    init(container, film) {
      this.#container = container;
      this.#film = film;

      const prevCardComponent = this.#filmCardComponent;
      const prevPopupComponent = this.#popupComponent;

      this.#filmCardComponent = new CardView(this.#film);
      this.#popupComponent = new PopupView(this.#film);


      this.#filmCardComponent.setOpenPopupClickHandler(this.#handleOpenPopupClick);
      this.#filmCardComponent.setToggleWatchedButtonClickHandler();
      this.#filmCardComponent.setToggleWatchListClickHandler(this.#handleWatchListClick);
      this.#filmCardComponent.setToggleFavoriteClickHandler();
      this.#popupComponent.setClosePopupClickHandler(this.#handleClosePopupClick);
      this.#popupComponent.setToggleWatchlistClickHandler();
      this.#popupComponent.setToggleWatchedClickHandler();
      this.#popupComponent.setToggleFavoriteClickHandler();

      if (prevCardComponent === null || prevPopupComponent === null) {
        render(this.#container, this.#filmCardComponent.element, renderPosition.BEFOREEND);
      }
    }

    destroy = () => {
      remove(this.#filmCardComponent);
      remove(this.#popupComponent);
    }

    // #renderCard = () => {
    //   render(this.#container, this.#filmCardComponent.element, renderPosition.BEFOREEND);
    // }

    // #handleWatchedListClick = () => {
    //   this.#changeData({
    //     ...this.#film.classList.toggle('film-card__controls-item--active')
    //   });
    // }

    #handleWatchListClick = () => {
      this.#changeData({...this.#film, watchlist: !this.#film.watchlist});
    }

    #handleOpenPopupClick = () => {
      this.#openPopup();
      document.addEventListener('keydown', this.#onEscKeyDown);
      document.body.classList.add('hide-overflow');
    }

    #openPopup = () => {
      this.#container.appendChild(this.#popupComponent.element);
    }

    #handleClosePopupClick = () => {
      this.#closePopup();
      document.removeEventListener('keydown', this.#onEscKeyDown);
      document.body.classList.remove('hide-overflow');
    }

    #closePopup = () => {
      this.#container.removeChild(this.#popupComponent.element);
    }

    #onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#closePopup();
        document.removeEventListener('keydown', this.#onEscKeyDown);
        document.body.classList.remove('hide-overflow');
      }
    }
}
