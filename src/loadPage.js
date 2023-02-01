import displayPage from "./displayRightPage.js";
import elementFactory from "./elementFactory.js";

const loadUpPage = () => {
    const mainContainer = elementFactory('div', { class: 'mainContainer' }).build();
    document.body.appendChild(mainContainer);
    const luMenu = elementFactory('lu', { class: 'menu' });
    const luMenuElement = luMenu.build();
    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 1 }, 'Home');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        } else if (i === 2) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 2 }, 'Menu');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        } else {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 3 }, 'Contact us');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        }
    }
    mainContainer.appendChild(luMenuElement);

    const loadPageTitleContainer = elementFactory('div', { class: 'loadPageTitleContainer' }).build();
    const loadPageTitle = elementFactory('h1').build();
    loadPageTitle.textContent = 'Welcome to Da Silva\'s restaurant!';
    loadPageTitleContainer.appendChild(loadPageTitle);
    mainContainer.appendChild(loadPageTitleContainer);

    displayPage();
}

export default loadUpPage;






