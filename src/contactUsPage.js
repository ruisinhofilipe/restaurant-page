import elementFactory from "./elementFactory";
import displayPage from "./displayRightPage";

const contactUsPage = () => {
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

    const contactUsContainer = elementFactory('div', { class: 'contactUsContainer' }).build();

    // Left side of contactUsContainer
    const locationContainer = elementFactory('div', { class: 'locationContainer left' }, 'location').build();

    // Right side of contactUsContainer
    const infoContainer = elementFactory('div', { class: 'infoContainer right' }).build();
    //// righ side content
    const openingHoursContainer = elementFactory('div', { class: 'OpeningHoursContainer' }, 'Opening-hours').build();
    const contactContainer = elementFactory('div', { class: 'contactContainer' }, 'Contact info').build();
    infoContainer.appendChild(openingHoursContainer);
    infoContainer.appendChild(contactContainer);

    contactUsContainer.appendChild(locationContainer);
    contactUsContainer.appendChild(infoContainer);

    mainContainer.appendChild(contactUsContainer);
    displayPage();
}

export default contactUsPage;