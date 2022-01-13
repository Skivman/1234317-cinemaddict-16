import AbstractView from './abstract-view.js';

const getFilmaContainer = () => (
  '<div class="films-list__container"></div>'
);

export default class FilmContainer extends AbstractView {
  get template() {
    return getFilmaContainer();
  }
}
