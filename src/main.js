import { getEmptyListTemplate } from './view/list-empty-view.js';
import { getFilterTemplate } from './view/list-filter-view.js';
import { getNoExtraFilterTemplate } from './view/list-no-extra-view.js';
import { getNavigationTemplate } from './view/navigation-view.js';
import { getStatsTemplate } from './view/stats-view.js';
import { getUserRankTemplate } from './view/user-rank-view.js';
import { getSortTemplate } from './view/list-sort-view.js';
import { getListTemplate } from './view/list-view.js';
import { getLoadingTemplate } from './view/loading-view.js';
import { getPopupTemplate } from './view/popup-view.js';
import { renderElements } from './render.js';

const elementsArray = [getUserRankTemplate(),
  getStatsTemplate(),
  getNavigationTemplate(),
  getFilterTemplate(),
  getEmptyListTemplate(),
  getNoExtraFilterTemplate(),
  getSortTemplate(),
  getListTemplate(),
  getLoadingTemplate(),
  getPopupTemplate()
];

renderElements(elementsArray);
