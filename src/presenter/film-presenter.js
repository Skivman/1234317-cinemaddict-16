import CardView from '../view/film-card-view.js';
import { render, renderPosition } from '../render.js';
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
      this.#handleOpenPopupClick();
      this.#handleClosePopupClick();
    }

    #renderCard = () => {
      render(this.#container, this.#filmCardComponent.element, renderPosition.BEFOREEND);
    }

    #handleOpenPopupClick = () => {
      this.#filmCardComponent.setOpenPopupClickHandler(() => {
        this.#openPopup();
        document.addEventListener('keydown', this.#onEscKeyDown);
        document.body.classList.add('hide-overflow');
      });
    }

    #openPopup = () => {
      this.#container.appendChild(this.#popupComponent.element);
    }

    #handleClosePopupClick = () => {
      this.#popupComponent.setClosePopupClickHandler(() => {
        this.#closePopup();
        document.removeEventListener('keydown', this.#onEscKeyDown);
        document.body.classList.remove('hide-overflow');
      });
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

//     #renderCard = () => {
//       this.#filmCardComponent = new CardView(this.#film);
//       this.#popupComponent = new PopupView(this.#film);

//       const openPopup = () => {
//         this.#container.appendChild(this.#popupComponent.element);
//       };

//       const closePopup = () => {
//         this.#container.removeChild(this.#popupComponent.element);
//       };

//       const onEscKeyDown = (evt) => {
//         if (evt.key === 'Escape' || evt.key === 'Esc') {
//           evt.preventDefault();
//           closePopup();
//           document.removeEventListener('keydown', onEscKeyDown);
//           document.body.classList.remove('hide-overflow');
//         }
//       };

//       this.#filmCardComponent.setOpenPopupClickHandler(() => {
//         openPopup();
//         document.addEventListener('keydown', onEscKeyDown);
//         document.body.classList.add('hide-overflow');
//       });

//       this.#popupComponent.setClosePopupClickHandler(() => {
//         closePopup();
//         document.removeEventListener('keydown', onEscKeyDown);
//         document.body.classList.remove('hide-overflow');
//       });


//       render(this.#container, this.#filmCardComponent.element, renderPosition.BEFOREEND);
//     }
// }
