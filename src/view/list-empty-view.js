import { createElement } from '../render.js';

const getEmptyListTemplate = () => (
  `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>

    <!--
      Значение отображаемого текста зависит от выбранного фильтра:
        * All movies – 'There are no movies in our database'
        * Watchlist — 'There are no movies to watch now';
        * History — 'There are no watched movies now';
        * Favorites — 'There are no favorite movies now'.
    -->
  </section>
</section>`
);

export default class EmptyList {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getEmptyListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
