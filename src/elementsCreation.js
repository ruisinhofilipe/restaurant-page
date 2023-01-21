import elementFactory from "./elementFactory.js";
import introductionContainer from "./introduction.js";
// Module that creates the page main container that has the background

const loadUpPage = () => {
    const mainContainer = elementFactory('div', { class: 'mainContainer' });
    const mainContainerElement = mainContainer.build();
    document.body.appendChild(mainContainerElement);
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
    mainContainerElement.appendChild(luMenuElement);
    mainContainerElement.appendChild(introductionContainer);
}

const loadUpMenu = () => {
    const mainContainer = elementFactory('div', { class: 'mainContainer' });
    const mainContainerElement = mainContainer.build();
    document.body.appendChild(mainContainerElement);
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
    mainContainerElement.appendChild(luMenuElement);
}

const displayRightPage = () => {
    let liNode = document.querySelectorAll('li');
    loadUpPage();
    liNode.forEach(li => {
        li.addEventListener('click', () => {
            if (li.id == 1) {
                // Display Menu content 
                console.log('Menu content will be displayed ...');
            } else if (li.id == 2) {
                // Display Location content
                console.log('Location content will be displayed ...');
            } else if (li.id == 3) {
                // Display Contact us content
                console.log('Contact us content will be displayed ...');
            } else {
                console.log('Load page');
            }
        });
    });

    // if (counter == 0) {
    //     loadUpPage();
    // } else if (counter == 1) {
    //     loadUpMenu();
    // } else {
    //     console.log('Not 0 or 1');
    // }
}
export { displayRightPage };






