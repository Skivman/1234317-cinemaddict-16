import { createElement } from '../render.js';

const getShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class ShowMore {
    #element = null;

    get element() {
      if (!this.#element) {
        this.#element = createElement(this.template);
      }

      return this.#element;
    }

    get template() {
      return getShowMoreButton();
    }

    removeElement() {
      this.#element = null;
    }
}
