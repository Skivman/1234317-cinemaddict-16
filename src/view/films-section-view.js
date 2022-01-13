import AbstractView from './abstract-view.js';

const getListTemplate = () => (
  '<section class="films"></section>'
);

export default class ListView extends AbstractView {
  get template() {
    return getListTemplate();
  }
}
