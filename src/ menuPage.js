import elementFactory from "./elementFactory";
import displayPage from "./displayRightPage";

const loadUpMenu = () => {
    // Create the top Lu
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

    // Create Menu container
    // Create two containers inside the Menu container, one for lunch and another for dinner.
    // Create the menus then and its content
    // Append everything

    // const menusContainer = elementFactory('div', { class: 'menusContainer' });
    // for(let i = 1; )



    // Display Right page according to user clicks
    displayPage();
}

export default loadUpMenu;