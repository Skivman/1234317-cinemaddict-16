import { generateCard } from './mock/mock-data.js';
import FilmListPresenter from './presenter/film-list-presenter.js';

const FILM_QUANTITY = 28;
const mockCards = Array.from({length: FILM_QUANTITY}, generateCard);
const siteMainElement = document.querySelector('.main');

const newList = new FilmListPresenter(siteMainElement);

newList.init(mockCards);
