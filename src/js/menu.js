import upcomingMenu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const jsMenu = document.querySelector('.js-menu');

jsMenu.insertAdjacentHTML('beforeend', menuTemplate(upcomingMenu));
