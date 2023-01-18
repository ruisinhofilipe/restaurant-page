import luMenu from './topNav.js';

// Module that creates the page main container that has the background

const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer');
mainContainer.appendChild(luMenu)
export default mainContainer;


