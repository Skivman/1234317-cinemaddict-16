import CardView from '../view/film-card-view.js';
import { render, renderPosition, remove } from '../render.js';
import PopupView from '../view/popup-view.js';

export default class FilmPresenter {
    #film = null;
    #container = null;
    #filmCardComponent = null;
    #popupComponent = null;

    init(container, film) {
      this.#container = container;
      this.#film = film;

      this.#filmCardComponent = new CardView(this.#film);
      this.#popupComponent = new PopupView(this.#film);

      this.#renderCard();
      this.#filmCardComponent.setOpenPopupClickHandler(this.#handleOpenPopupClick);
      this.#filmCardComponent.setToggleWatchedButtonClickHandler();
      this.#filmCardComponent.setToggleWatchListClickHandler();
      this.#filmCardComponent.setToggleFavoriteClickHandler();
      this.#popupComponent.setClosePopupClickHandler(this.#handleClosePopupClick);
      this.#popupComponent.setToggleWatchlistClickHandler();
      this.#popupComponent.setToggleWatchedClickHandler();
      this.#popupComponent.setToggleFavoriteClickHandler();
    }

    destroy = () => {
      remove(this.#filmCardComponent);
      remove(this.#popupComponent);
    }

    #renderCard = () => {
      render(this.#container, this.#filmCardComponent.element, renderPosition.BEFOREEND);
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
