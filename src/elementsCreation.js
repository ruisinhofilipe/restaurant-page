import elementFactory from "./elementFactory.js";
import introductionContainer from "./introduction.js";
// Module that creates the page main container that has the background

const mainContainer = elementFactory('div', { class: 'mainContainer' });
const mainContainerElement = mainContainer.build();

const luMenu = elementFactory('lu', { class: 'menu' });
const luMenuElement = luMenu.build();
for (let i = 1; i <= 3; i++) {
    if (i === 1) {
        const liMenu = elementFactory('li', { class: 'menuLi', id: 1 }, 'Menu');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    } else if (i === 2) {
        const liMenu = elementFactory('li', { class: 'menuLi', id: 2 }, 'Location');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    } else {
        const liMenu = elementFactory('li', { class: 'menuLi', id: 3 }, 'Contact us');
        const liMenuElement = liMenu.build();
        luMenuElement.appendChild(liMenuElement);
    }
}

const liPractice = () => {
    let liNode = document.querySelectorAll('li');
    liNode.forEach(li => {
        li.addEventListener('click', () => {
            if (li.id == 1) {
                console.log('Menu content will be displayed ...')
                // Display Menu content 
            } else if (li.id == 2) {
                // Display Location content
                console.log('Location content will be displayed ...')
            } else {
                // Display Contact us content
                console.log('Contact content will be displayed ...')
            }
        });
    });
}

mainContainerElement.appendChild(luMenuElement);
mainContainerElement.appendChild(introductionContainer);

export { mainContainerElement, luMenuElement, liPractice };






