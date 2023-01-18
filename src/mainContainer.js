import luMenu from "./topNav.js";
import introductionContainer from "./introduction.js";
// Module that creates the page main container that has the background

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
mainContainer.appendChild(luMenu);
mainContainer.appendChild(introductionContainer);

export default mainContainer;


