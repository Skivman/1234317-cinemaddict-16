import AbstractView from './abstract-view.js';

const getShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class ShowMore extends AbstractView {
  get template() {
    return getShowMoreButton();
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }
}
