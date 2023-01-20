import elementFactory from "./elementFactory.js";
import introductionContainer from "./introduction.js";
// Module that creates the page main container that has the background

const mainContainer = elementFactory('div', { class: 'mainContainer' });
const mainContainerElement = mainContainer.build();

const luMenu = elementFactory('lu', { class: 'menu' });
const luMenuElement = luMenu.build();
for (let i = 0; i < 3; i++) {
    if (i === 0) {
        const liMenu = elementFactory('li', { class: 'menuLi' }, 'Menu');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    } else if (i === 1) {
        const liMenu = elementFactory('li', { class: 'menuLi' }, 'Location');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    } else {
        const liMenu = elementFactory('li', { class: 'menuLi' }, 'Contact us');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    }
}
mainContainerElement.appendChild(luMenuElement);
mainContainerElement.appendChild(introductionContainer);

export default mainContainerElement;





