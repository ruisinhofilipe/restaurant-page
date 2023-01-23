import elementFactory from "./elementFactory.js";
import introductionContainer from "./introduction.js";
import clearPage from "./clearPage.js";
import loadUpMenu from "./ menuPage.js";

const loadUpPage = () => {
    const mainContainer = elementFactory('div', { class: 'mainContainer' });
    const mainContainerElement = mainContainer.build();
    document.body.appendChild(mainContainerElement);
    // document.querySelector('.hidden').classList.remove('hidden');
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

    let liNode = document.querySelectorAll('li');
    liNode.forEach(li => {
        li.addEventListener('click', () => {
            if (li.id == 1) {
                // Display Menu content 
                clearPage();
                loadUpMenu();
                console.log('Menu content will be displayed ...');
            } else if (li.id == 2) {
                // Display Location content
                clearPage();
                // Running the loadPage only to check if everything is working 
                loadUpPage();
                console.log('Location content will be displayed ...');
            } else if (li.id == 3) {
                // Display Contact us content
                console.log('Contact us content will be displayed ...');
            } else {
                console.log('Load page');
            }
        });
    });
}

export { loadUpPage };






