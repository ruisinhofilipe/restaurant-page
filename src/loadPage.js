import displayPage from "./displayRightPage.js";
import elementFactory from "./elementFactory.js";
import introductionContainer from "./introduction.js";


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

    displayPage();
}

export default loadUpPage;






