import AbstractView from './abstract-view.js';

const getListTemplate = () => (
  `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          <div class="films-list__container">
      </section>
    </section>`
);

export default class ListView extends AbstractView {
  get template() {
    return getListTemplate();
  }
}
