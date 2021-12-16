import { createElement } from '../render';

const getListTemplate = () => (
  `<div class="films-list__container"></div>`
);

export default class ListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
