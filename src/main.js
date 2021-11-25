import { getEmptyListMarkup } from './view/list-empty-view.js';
import { getFilterMarkup } from './view/list-filter-view.js';
import { getNoExtraFilterMarkup } from './view/list-no-extra-view.js';
import { getNavigationMarkup } from './view/navigation-view.js';
import { getStatsMarkup } from './view/stats-view.js';
import { getUserRankMarkup } from './view/user-rank-view.js';
import { getSortMarkup } from './view/list-sort-view.js';
import { getListMarkup } from './view/list-view.js';
import { getLoadingMarkup } from './loading-view.js';
import { getPopupMarkup } from './view/popup-view.js';
import { renderComponents } from './render.js';


const elementsArray = [getUserRankMarkup(),
  getStatsMarkup(),
  getNavigationMarkup(),
  getFilterMarkup(),
  getEmptyListMarkup(),
  getNoExtraFilterMarkup(),
  getSortMarkup(),
  getListMarkup(),
  getLoadingMarkup(),
  getPopupMarkup()
];

renderComponents(elementsArray);
